const { execSync } = require('child_process');

console.log('Installing required dependencies...');

try {
  // Install glob package for file pattern matching
  execSync('npm install glob @types/glob --save-dev', { stdio: 'inherit' });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error.message);
  process.exit(1);
} 