'use client';

import React, { useMemo, useEffect, useState } from 'react';

const icons = [
  // Python
  () => (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 31a7 7 0 0 0 7-7v-7.52h-7.52a1.48 1.48 0 0 1-1.48-1.48v-7a7 7 0 0 0-14 0h7a.48.48 0 0 1 .48.48v7.52H1V16a7 7 0 0 0 7 7h8Z" fill="#306998"/>
      <g filter="url(#a)">
        <path d="M10.48 9a1.48 1.48 0 0 1-1.48-1.48v-4A1.48 1.48 0 0 1 10.48 2a1.48 1.48 0 0 1 1.48 1.48v4A1.48 1.48 0 0 1 10.48 9Z" fill="#FFD43B"/>
      </g>
      <path d="M25 16a7 7 0 0 0-7 7v7.52h7.52a1.48 1.48 0 0 1 1.48 1.48v4a7 7 0 0 0 14 0h-7a.48.48 0 0 1-.48-.48V23H31a7 7 0 0 0-7-7h-8Z" fill="#FFD43B"/>
      <g filter="url(#a)">
        <path d="M21.52 23a1.48 1.48 0 0 1-1.48-1.48v-4a1.48 1.48 0 0 1 1.48-1.48 1.48 1.48 0 0 1 1.48 1.48v4a1.48 1.48 0 0 1-1.48 1.48Z" fill="#306998"/>
      </g>
      <defs>
        <filter id="a" x="8" y="2" width="5.96" height="8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="shape" result="effect1_innerShadow_103_4"/>
        </filter>
      </defs>
    </svg>
  ),
  // React
  () => (
    <svg viewBox="-11.5 -10.232 23 20.463" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  // TensorFlow
  () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3 5.4c-2.3-1.4-5.2-2-8.3-2v17.2c3.1 0 6-1 8.3-2.8 1.5-1.1 2.7-2.9 2.7-4.8s-1.2-3.7-2.7-4.8z" fill="#FF6F00"/><path d="M12.3 5.4c2.3-1.4 5.2-2 8.3-2v17.2c-3.1 0-6-1-8.3-2.8-1.5-1.1-2.7-2.9-2.7-4.8s1.2-3.7 2.7-4.8z" fill="#FFA000"/></svg>
  ),
  // Brain/AI
  () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-11 0C4.6 4.5 3 6.1 3 8s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm11 7c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-11 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z" fill="#007BFF"/><path d="M8 8h8v2H8zm0 7h8v2H8z" fill="#FFC107"/><path d="M8 8v9h2V8zm6 0v9h2V8z" fill="#4CAF50"/>
    </svg>
  ),
  // Database
  () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#A8B9C8"/>
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#A8B9C8"/>
      <path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" fill="#D3DEE9"/>
      <path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3" fill="#D3DEE9"/>
    </svg>
  ),
  // Docker
  () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.1 9.9c-.3-.4-.8-.6-1.3-.6h-3.3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h3.3c.6 0 1.1-.5 1.1-1.1 0-.3-.1-.6-.3-.7z" fill="#0db7ed"/>
      <path d="M19.1 7.1h-2.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h2.1c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1z" fill="#0db7ed"/><path d="M19.1 4.3h-3.3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h3.3c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1z" fill="#0db7ed"/><path d="M22.5 12.3H15c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h7.5c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1z" fill="#0db7ed"/><path d="M12.9 7.1H9.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h3.3c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1z" fill="#0db7ed"/><path d="M23.1 8.8c-.2 0-.4 0-.6.1v-3c0-.6-.5-1.1-1.1-1.1h-4.3c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h.9v.4h-2.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h.8v.4H9.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h5.8v.4H15c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h8.5c.6 0 1.1-.5 1.1-1.1V9.9c0-.6-.5-1.1-1.1-1.1zM1.9 12.8c-.1 0-.1.1-.2.1-.2.2-.3.4-.3.7 0 .6.5 1.1 1.1 1.1h.5v-1.1c0-.6-.5-1.1-1.1-1.1z" fill="#0db7ed"/><path d="M20.6 15.6c.2.2.3.4.3.7 0 .6-.5 1.1-1.1 1.1h-7.5c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h7.5c.3 0 .6.1.8.3z" fill="#0db7ed"/><path fillRule="evenodd" clipRule="evenodd" d="M12.4 17.5c-.1.3-.2.6-.2.9v1.6c-2.3.8-3.9 2-4.8 3.5H2c-1.1 0-2 .9-2 2s.9 2 2 2h20c1.1 0 2-.9 2-2s-.9-2-2-2h-5.6c-.9-1.5-2.5-2.7-4.8-3.5v-1.6c0-.3-.1-.6-.2-.9-1 .6-2.2.6-3.2 0zm-1.8 4.2c-.6.3-1 .9-1 1.6s.4 1.3 1 1.6v-3.2zm4.4 3.2c.6-.3 1-.9 1-1.6s-.4-1.3-1-1.6v3.2z" fill="#0db7ed"/>
    </svg>
  ),
];

const iconCount = 15;

export function BackgroundAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animatedIcons = useMemo(() => {
    if (!isMounted) return [];

    return Array.from({ length: iconCount }).map((_, i) => {
      const Icon = icons[i % icons.length];
      const size = Math.random() * 60 + 40; // 40px to 100px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 30 + 20; // 20s to 50s
      const delay = Math.random() * -25; // -25s to 0s

      return (
        <div
          key={i}
          className="icon-float"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon />
        </div>
      );
    });
  }, [isMounted]);

  return <div className="background-animation">{animatedIcons}</div>;
}
