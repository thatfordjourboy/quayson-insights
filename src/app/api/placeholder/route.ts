import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const width = parseInt(searchParams.get('width') || '600', 10);
  const height = parseInt(searchParams.get('height') || '400', 10);
  const text = searchParams.get('text') || 'Placeholder Image';
  const bgColor = searchParams.get('bgColor') || '0ea5e9'; // primary-500
  const textColor = searchParams.get('textColor') || 'ffffff';

  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#${bgColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width, height) / 10}px" 
        fill="#${textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${text}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
} 