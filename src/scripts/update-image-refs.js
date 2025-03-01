const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// Define the image mappings (jpg to svg)
const imageMappings = [
  { from: '/images/profile.jpg', to: '/images/profile.svg' },
  { from: '/images/about.jpg', to: '/images/about.svg' },
  { from: '/images/blog/ai-legal-research.jpg', to: '/images/blog/ai-legal-research.svg' },
  { from: '/images/blog/business-analytics.jpg', to: '/images/blog/business-analytics.svg' },
  { from: '/images/blog/ml-marketing.jpg', to: '/images/blog/ml-marketing.svg' },
  { from: '/images/blog/ai-ethics.jpg', to: '/images/blog/ai-ethics.svg' },
  { from: '/images/blog/ai-and-law.jpg', to: '/images/blog/ai-and-law.svg' },
];

console.log('Updating image references in code...');

try {
  // Find all TypeScript and TSX files in the src directory
  const files = globSync('src/**/*.{ts,tsx}', { ignore: 'node_modules/**' });
  
  const updatedFiles = [];

  // Process each file
  for (const file of files) {
    // Skip the current script files
    if (file === 'src/scripts/update-image-refs.js' || 
        file === 'src/scripts/generate-images.js') {
      continue;
    }
    
    // Read file content
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Apply each mapping
    for (const mapping of imageMappings) {
      content = content.replace(new RegExp(mapping.from.replace(/\//g, '\\/'), 'g'), mapping.to);
    }
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      updatedFiles.push(file);
      console.log(`Updated: ${file}`);
    }
  }

  console.log(`\nUpdated ${updatedFiles.length} files.`);
  console.log('Image references updated successfully!');
} catch (error) {
  console.error('Error updating image references:', error.message);
  process.exit(1);
} 