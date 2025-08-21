#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command line arguments
const args = process.argv.slice(2);
const title = args[0];
const tags = args[1] ? args[1].split(",").map((tag) => tag.trim()) : [];

if (!title) {
  console.log("Usage: npm run thought \"Your Thought Title\" \"tag1,tag2,tag3\"");
  console.log("Example: npm run thought \"New AI Idea\" \"AI,machine-learning,experiment\"");
  process.exit(1);
}

// Get current date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Get the next number for the filename
const thoughtsDir = path.join(__dirname, "../src/content/thoughts");
const existingFiles = fs.readdirSync(thoughtsDir)
  .filter((file) => file.endsWith(".md") && file !== "_template.md")
  .map((file) => parseInt(file.split("-")[0]))
  .filter((num) => !isNaN(num));

const nextNumber = existingFiles.length > 0 ? Math.max(...existingFiles) + 1 : 1;
const filename = `${nextNumber.toString().padStart(2, "0")}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.md`;

// Create the thought content
const thoughtContent = `---
title: "${title}"
date: ${today}
tags: [${tags.map((tag) => `"${tag}"`).join(", ")}]
---

## What I'm thinking about

Start writing your thoughts here. You can use:

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

## Key Ideas

1. First idea
2. Second idea
3. Third idea

## Questions

- What am I trying to figure out?
- What assumptions am I making?
- What should I explore next?

## Next Steps

What do I want to do with this thought? Where should it lead?

---

*Remember: This is a playground. Don't worry about being perfect - just capture your thinking!*
`;

// Write the file
const filepath = path.join(thoughtsDir, filename);
fs.writeFileSync(filepath, thoughtContent);

console.log(`✅ Created new thought: ${filename}`);
console.log(`📝 Title: ${title}`);
console.log(`🏷️  Tags: ${tags.join(", ") || "none"}`);
console.log(`📅 Date: ${today}`);
console.log(`📁 Location: ${filepath}`);
console.log("\n💡 Tip: Edit the file to add your actual thoughts!");
