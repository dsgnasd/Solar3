#!/usr/bin/env node

/**
 * Solar3 Token Audit Script
 * 
 * Runs through code files and flags hard-coded CSS values (hex codes, pixel values)
 * that should be replaced with var(--tokens) from the design system.
 * 
 * Usage:
 * node scripts/token-audit.js [directory]
 */

const fs = require('fs');
const path = require('path');

// Patterns to hunt for
const HARDCODED_PATTERNS = [
  {
    name: 'Hex Colors',
    regex: /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g,
    suggestion: 'Use a var(--color-*) token.'
  },
  {
    name: 'RGB/RGBA Colors',
    regex: /rgba?\(([^)]+)\)/g,
    suggestion: 'Use a var(--color-*) token (or adjust opacity on a token if needed).'
  },
  {
    name: 'Font Sizes (px)',
    regex: /font-size:\s*\d+px/g,
    suggestion: 'Use a var(--font-size-*) token.'
  },
  {
    name: 'Spacings/Margins/Paddings (px)',
    regex: /(margin|padding|gap).*?:\s*(\d+px)+/g,
    suggestion: 'Use var(--spacing-*) tokens.'
  },
  {
    name: 'Border Radius (px)',
    regex: /border-radius:\s*\d+px/g,
    suggestion: 'Use var(--radius-*) tokens.'
  }
];

// Folders to ignore
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'build', 'public'];
// File extensions to check
const ALLOWED_EXTS = ['.css', '.scss', '.tsx', '.ts', '.jsx', '.js', '.vue', '.svelte'];

function walkSync(currentDirPath, callback) {
  if (!fs.existsSync(currentDirPath)) return;
  
  fs.readdirSync(currentDirPath).forEach((name) => {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      if (ALLOWED_EXTS.includes(path.extname(filePath))) {
        // Skip checking the tokens definition file itself!
        if (!filePath.endsWith('tokens.css')) {
          callback(filePath);
        }
      }
    } else if (stat.isDirectory() && !IGNORE_DIRS.includes(name)) {
      walkSync(filePath, callback);
    }
  });
}

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  let hasWarnings = false;

  lines.forEach((line, lineIndex) => {
    // Skip comments loosely
    if (line.trim().startsWith('//') || line.trim().startsWith('/*')) return;

    HARDCODED_PATTERNS.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.regex);
      while ((match = regex.exec(line)) !== null) {
        if (!hasWarnings) {
          console.log(`\n📄 ${filePath}`);
          hasWarnings = true;
        }
        
        console.log(`  Line ${lineIndex + 1}: Found hardcoded value -> \x1b[31m${match[0]}\x1b[0m`);
        console.log(`      ↳ \x1b[33mSuggestion: ${pattern.suggestion}\x1b[0m`);
      }
    });
  });
  
  return hasWarnings;
}

// Main Execution
const targetDir = process.argv[2] || '.';
console.log(`\n🔍 Auditing for hardcoded design values in: ${targetDir}`);
console.log(`========================================================`);

let filesWithWarnings = 0;

walkSync(targetDir, (filePath) => {
  const hadWarning = auditFile(filePath);
  if (hadWarning) filesWithWarnings++;
});

console.log(`\n========================================================`);
if (filesWithWarnings === 0) {
  console.log(`✅ Awesome! No hardcoded design values found.`);
  process.exit(0);
} else {
  console.log(`⚠️  Audit complete. Found violations in ${filesWithWarnings} file(s).`);
  console.log(`   Please replace hardcoded values with design system tokens!`);
  process.exit(1);
}
