const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if glob is installed
try {
  require.resolve('glob');
} catch (e) {
  console.log('Installing glob package...');
  execSync('npm install glob');
}

const glob = require('glob');

// Define image mappings (old path to new path)
const imageMappings = [
  { from: '/images/profile.jpg', to: '/images/profile.svg' },
  { from: '/images/about.jpg', to: '/images/about.svg' },
  { from: '/images/blog/ai-and-law.jpg', to: '/images/blog/ai-and-law.svg' },
  { from: '/images/blog/ai-ethics.jpg', to: '/images/blog/ai-ethics.svg' },
  { from: '/images/blog/business-analytics.jpg', to: '/images/blog/business-analytics.svg' },
  { from: '/images/blog/ml-marketing.jpg', to: '/images/blog/ml-marketing.svg' },
  { from: '/images/blog/ai-legal-research.jpg', to: '/images/blog/ai-legal-research.svg' },
];

// Find all TypeScript and TSX files in the src directory
const files = glob.sync('src/**/*.{ts,tsx}');
let updatedFiles = 0;

// Process each file
files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    // Apply each mapping
    imageMappings.forEach(mapping => {
      if (content.includes(mapping.from)) {
        content = content.replace(new RegExp(mapping.from.replace(/\//g, '\\/'), 'g'), mapping.to);
        hasChanges = true;
        console.log(`Updated reference in ${file}: ${mapping.from} -> ${mapping.to}`);
      }
    });
    
    // Save the file if changes were made
    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      updatedFiles++;
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error);
  }
});

console.log(`\nImage references updated in ${updatedFiles} files.`);
console.log('Done!'); 