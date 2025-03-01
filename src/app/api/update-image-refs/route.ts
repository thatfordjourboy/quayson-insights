import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';

export async function GET(request: NextRequest) {
  try {
    // Define the image mappings (jpg to svg)
    const imageMappings = [
      { from: '/images/profile.svg', to: '/images/profile.svg' },
      { from: '/images/about.svg', to: '/images/about.svg' },
      { from: '/images/blog/ai-legal-research.svg', to: '/images/blog/ai-legal-research.svg' },
      { from: '/images/blog/business-analytics.svg', to: '/images/blog/business-analytics.svg' },
      { from: '/images/blog/ml-marketing.svg', to: '/images/blog/ml-marketing.svg' },
      { from: '/images/blog/ai-ethics.svg', to: '/images/blog/ai-ethics.svg' },
      { from: '/images/blog/ai-and-law.svg', to: '/images/blog/ai-and-law.svg' },
    ];

    // Find all TypeScript and TSX files in the src directory
    const files = await glob('src/**/*.{ts,tsx}', { ignore: 'node_modules/**' });
    
    const updatedFiles = [];

    // Process each file
    for (const file of files) {
      // Skip the current file to avoid infinite recursion
      if (file === 'src/app/api/update-image-refs/route.ts') continue;
      
      // Read file content
      let content = await fs.readFile(file, 'utf8');
      let originalContent = content;
      
      // Apply each mapping
      for (const mapping of imageMappings) {
        content = content.replace(new RegExp(mapping.from.replace(/\//g, '\\/'), 'g'), mapping.to);
      }
      
      // If content changed, write it back
      if (content !== originalContent) {
        await fs.writeFile(file, content, 'utf8');
        updatedFiles.push(file);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Image references updated successfully',
      updatedFiles
    });
  } catch (error) {
    console.error('Error updating image references:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update image references',
        details: (error as Error).message
      },
      { status: 500 }
    );
  }
} 