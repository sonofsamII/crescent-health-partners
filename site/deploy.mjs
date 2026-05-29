#!/usr/bin/env node
/**
 * Deploy Crescent Health Partners to personal Vercel.
 *
 * Uses the two-step Vercel API:
 *   1. POST each file to /v2/files (returns sha + size)
 *   2. POST /v13/deployments with file refs (sha-based, no body bloat)
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ENV = "C:\\Users\\sam\\personal\\.env.personal";
const env = {};
for (const line of fs.readFileSync(ENV, "utf8").split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) env[m[1].trim()] = m[2].trim();
}
const VC_TOKEN = env.VERCEL_TOKEN_PERSONAL;
const ROOT = process.cwd();
const PROJECT = "crescent-health-partners";
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "out", "dist", ".vercel"]);
const SKIP_FILES = new Set([".env.personal", "deploy.mjs"]);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name));
    } else {
      if (SKIP_FILES.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      const rel = path.relative(ROOT, full).split(path.sep).join("/");
      const buf = fs.readFileSync(full);
      const sha = crypto.createHash("sha1").update(buf).digest("hex");
      files.push({ rel, buf, sha, size: buf.length });
    }
  }
}
walk(ROOT);
console.log(`Collected ${files.length} files (${(files.reduce((a, f) => a + f.size, 0) / 1024 / 1024).toFixed(1)} MB total)`);

let uploaded = 0;
for (const f of files) {
  const r = await fetch("https://api.vercel.com/v2/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${VC_TOKEN}`,
      "Content-Type": "application/octet-stream",
      "x-vercel-digest": f.sha,
    },
    body: f.buf,
  });
  if (!r.ok) {
    console.error(`Upload failed for ${f.rel}: ${r.status} ${await r.text()}`);
    process.exit(1);
  }
  uploaded++;
  if (uploaded % 10 === 0) process.stdout.write(`  uploaded ${uploaded}/${files.length}\n`);
}
console.log(`Uploaded ${uploaded}/${files.length} files`);

const r = await fetch("https://api.vercel.com/v13/deployments?forceNew=1", {
  method: "POST",
  headers: { Authorization: `Bearer ${VC_TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    name: PROJECT,
    files: files.map((f) => ({ file: f.rel, sha: f.sha, size: f.size })),
    projectSettings: { framework: "nextjs" },
    target: "production",
  }),
});
if (!r.ok) {
  console.error(`Create deployment failed ${r.status}`, await r.text());
  process.exit(1);
}
const dep = await r.json();
console.log(`Deployment ${dep.id} → https://${dep.url}`);

let state = dep.readyState || dep.status;
const start = Date.now();
while (!["READY", "ERROR", "CANCELED"].includes(state) && Date.now() - start < 300000) {
  await sleep(4000);
  const p = await fetch(`https://api.vercel.com/v13/deployments/${dep.id}`, {
    headers: { Authorization: `Bearer ${VC_TOKEN}` },
  });
  state = (await p.json()).readyState || state;
  process.stdout.write(`  ${state}\n`);
}
console.log(state === "READY" ? `LIVE: https://${dep.url}` : `Final state: ${state}`);
console.log(`Project ID: ${dep.projectId}`);
console.log(`Deployment URL: https://${dep.url}`);
