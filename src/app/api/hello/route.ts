import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    endpoints: [
      {
        path: '/api/hello',
        description: 'This endpoint - returns a greeting and available API endpoints',
        method: 'GET'
      },
      {
        path: '/api/placeholder',
        description: 'Generates placeholder images with customizable parameters',
        method: 'GET',
        params: {
          width: 'Image width in pixels (default: 600)',
          height: 'Image height in pixels (default: 400)',
          text: 'Text to display on the image (default: "Placeholder Image")',
          bgColor: 'Background color hex code without # (default: "0ea5e9")',
          textColor: 'Text color hex code without # (default: "ffffff")'
        }
      }
    ]
  });
} 