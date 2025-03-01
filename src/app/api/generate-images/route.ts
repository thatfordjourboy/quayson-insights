import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

// Function to ensure directory exists
async function ensureDirectoryExists(dirPath: string) {
  try {
    await fsPromises.access(dirPath);
  } catch (error) {
    // Directory doesn't exist, create it
    await fsPromises.mkdir(dirPath, { recursive: true });
  }
}

// Function to generate SVG content
function generateSvgPlaceholder(width: number, height: number, text: string, bgColor: string = '0ea5e9', textColor: string = 'ffffff') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#${bgColor}"/>
    <text 
      x="50%" 
      y="50%" 
      font-family="Arial, sans-serif" 
      font-size="${Math.min(width, height) / 10}px" 
      fill="#${textColor}" 
      text-anchor="middle" 
      dominant-baseline="middle"
    >${text}</text>
  </svg>`;
}

export async function GET(request: NextRequest) {
  try {
    // Define the images to generate
    const imagesToGenerate = [
      {
        path: 'images/profile.jpg',
        width: 400,
        height: 400,
        text: 'Eleazer Quayson',
        bgColor: '4f46e5' // Indigo
      },
      {
        path: 'images/about.jpg',
        width: 1200,
        height: 600,
        text: 'About Eleazer Quayson',
        bgColor: '8b5cf6' // Violet
      },
      {
        path: 'images/blog/ai-legal-research.jpg',
        width: 800,
        height: 500,
        text: 'AI Legal Research',
        bgColor: '06b6d4' // Cyan
      },
      {
        path: 'images/blog/business-analytics.jpg',
        width: 800,
        height: 500,
        text: 'Business Analytics',
        bgColor: '0ea5e9' // Sky
      },
      {
        path: 'images/blog/ml-marketing.jpg',
        width: 800,
        height: 500,
        text: 'ML Marketing',
        bgColor: '3b82f6' // Blue
      },
      {
        path: 'images/blog/ai-ethics.jpg',
        width: 800,
        height: 500,
        text: 'AI Ethics',
        bgColor: '8b5cf6' // Violet
      },
      {
        path: 'images/blog/ai-and-law.jpg',
        width: 800,
        height: 500,
        text: 'AI and Law',
        bgColor: '6366f1' // Indigo
      }
    ];

    const results = [];

    // Process each image
    for (const img of imagesToGenerate) {
      const fullPath = path.join(process.cwd(), 'public', img.path);
      const dirPath = path.dirname(fullPath);
      
      // Ensure directory exists
      await ensureDirectoryExists(dirPath);
      
      // Generate SVG content
      const svgContent = generateSvgPlaceholder(
        img.width, 
        img.height, 
        img.text, 
        img.bgColor
      );
      
      // Write SVG file
      await fsPromises.writeFile(fullPath.replace('.jpg', '.svg'), svgContent);
      
      results.push({
        path: img.path.replace('.jpg', '.svg'),
        status: 'created'
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Placeholder images generated successfully',
      images: results
    });
  } catch (error) {
    console.error('Error generating images:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate images',
        details: (error as Error).message
      },
      { status: 500 }
    );
  }
} 