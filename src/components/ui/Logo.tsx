"use client";

import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'horizontal' | 'compact' | 'icon' | 'monochrome' | 'animated';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ 
  variant = 'primary', 
  className = '', 
  width = 240, 
  height = 'auto' 
}: LogoProps) {
  
  // In a real app with next-themes, 'auto' would rely on CSS variables or a theme provider. 
  // We use currentColor for the main text so the parent can control it via text-white or text-black.
  // We use the brand teal for the hyphen and 'Software Labs' in light mode, and muted slate in dark mode.
  const textColor = variant === 'monochrome' ? 'currentColor' : 'currentColor';
  const brandTeal = variant === 'monochrome' ? 'currentColor' : '#328895';
  const subTextColor = variant === 'monochrome' ? 'currentColor' : '#64748B';

  const isAnimated = variant === 'animated';
  const isMonochrome = variant === 'monochrome';

  // Original Brand Colors
  const orange = isMonochrome ? 'currentColor' : '#FF7600';
  const blue = isMonochrome ? 'currentColor' : '#00B4FF';
  const green = isMonochrome ? 'currentColor' : '#84D136';

  // Triangle SVG paths (perfect equilateral pointing UP centered at 0,0)
  // Base length 14, Height 12.12
  const trianglePath = "M 0,-6.06 L 7,6.06 L -7,6.06 Z";

  const Triangles = () => (
    <g className="logo-triangles">
      {/* Blue Triangle (Left) */}
      <path 
        d={trianglePath} 
        fill={blue} 
        transform="translate(140, 22) rotate(30)" 
        className={`origin-[140px_22px] transition-transform duration-500 hover:scale-110 ${isAnimated ? 'animate-pulse' : ''}`}
        style={isAnimated ? { animationDelay: '0ms' } : {}}
      />
      {/* Green Triangle (Bottom Right) */}
      <path 
        d={trianglePath} 
        fill={green} 
        transform="translate(158, 28) rotate(-30) scale(1.1)" 
        className={`origin-[158px_28px] transition-transform duration-500 hover:scale-110 ${isAnimated ? 'animate-pulse' : ''}`}
        style={isAnimated ? { animationDelay: '200ms' } : {}}
      />
      {/* Orange Triangle (Top Right) */}
      <path 
        d={trianglePath} 
        fill={orange} 
        transform="translate(156, 8) rotate(150) scale(1.2)" 
        className={`origin-[156px_8px] transition-transform duration-500 hover:scale-110 ${isAnimated ? 'animate-pulse' : ''}`}
        style={isAnimated ? { animationDelay: '400ms' } : {}}
      />
    </g>
  );

  // If just the icon is requested (Triangles only)
  if (variant === 'icon') {
    return (
      <svg width={width} height={height} viewBox="130 -5 40 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Triangles />
      </svg>
    );
  }

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 50" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Wordmark */}
        <text 
          x="0" 
          y="34" 
          fontFamily="Inter, system-ui, -apple-system, sans-serif" 
          fontSize="36" 
          fontWeight="600" 
          fill={textColor} 
          letterSpacing="-0.04em"
        >
          i<tspan fill={brandTeal}>-</tspan>cronus
        </text>
        
        {/* Sub-brand */}
        {variant !== 'compact' && (
          <text 
            x="36" 
            y="48" 
            fontFamily="Inter, system-ui, -apple-system, sans-serif" 
            fontSize="10" 
            fontWeight="500" 
            fill={subTextColor} 
            letterSpacing="0.02em" 
          >
            Software Labs
          </text>
        )}

        {/* Triangles Symbol */}
        <Triangles />
      </g>
    </svg>
  );
}
