'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  
  // Initialize particles based on screen size
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateDimensions = () => {
      if (canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        setDimensions({ width, height });
        
        // Create particles based on screen size
        const particleCount = Math.floor(width * height / 15000);
        const isDark = theme === 'dark';
        
        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: isDark 
              ? `rgba(${150 + Math.random() * 105}, ${150 + Math.random() * 105}, ${255}, ${0.3 + Math.random() * 0.3})`
              : `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, ${255}, ${0.2 + Math.random() * 0.2})`
          });
        }
        setParticles(newParticles);
      }
    };
    
    const handleResize = () => {
      updateDimensions();
    };
    
    updateDimensions();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);
  
  // Handle mouse movement
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      const updatedParticles = [...particles];
      
      updatedParticles.forEach((p, index) => {
        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Mouse interaction - gentle attraction
        const dx = mousePosition.current.x - p.x;
        const dy = mousePosition.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (100 - distance) / 1500;
          p.speedX += forceDirectionX * force;
          p.speedY += forceDirectionY * force;
        }
        
        // Add some randomness to movement
        p.speedX += (Math.random() - 0.5) * 0.01;
        p.speedY += (Math.random() - 0.5) * 0.01;
        
        // Dampen speed
        p.speedX *= 0.98;
        p.speedY *= 0.98;
        
        // Boundary check
        if (p.x < 0 || p.x > dimensions.width) {
          p.speedX = -p.speedX;
        }
        
        if (p.y < 0 || p.y > dimensions.height) {
          p.speedY = -p.speedY;
        }
        
        updatedParticles[index] = p;
      });
      
      setParticles(updatedParticles);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [particles, dimensions]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
} 