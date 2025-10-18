#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import inquirer from "inquirer";
import { fileURLToPath } from "url"; // ✅ Needed for ESM compatibility

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🟩 Ask user for project name
const answers = await inquirer.prompt([
  {
    type: "input",
    name: "projectName",
    message: "Enter your project name:",
    default: "my-backend",
  },
]);

const projectName = answers.projectName.trim();
const projectPath = path.join(process.cwd(), projectName);

// 🟩 Define template path
const templatePath = path.join(__dirname, "../templates");

// 🟩 Copy template folder recursively
fs.cpSync(templatePath, projectPath, { recursive: true });

// 🟩 Install dependencies
console.log("Installing dependencies...");
execSync(`cd "${projectName}" && npm install`, { stdio: "inherit" });

// 🟩 Success message
console.log(`Project '${projectName}' setup complete!\n`);
console.log("Next steps:");
console.log(`  cd ${projectName}`);
console.log("  npm run dev");
