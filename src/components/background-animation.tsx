'use client';

import {
  BrainCircuit,
  Code,
  Cpu,
  Database,
  GitMerge,
  Bot,
  Layers,
  FlaskConical,
  Component,
} from 'lucide-react';
import React, { useMemo, useEffect, useState } from 'react';

const icons = [
  BrainCircuit,
  Code,
  Cpu,
  Database,
  GitMerge,
  Bot,
  Layers,
  FlaskConical,
  Component,
];

const iconCount = 20;

export function BackgroundAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animatedIcons = useMemo(() => {
    if (!isMounted) return [];

    return Array.from({ length: iconCount }).map((_, i) => {
      const Icon = icons[i % icons.length];
      const size = Math.random() * 60 + 20; // 20px to 80px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 20 + 15; // 15s to 35s
      const delay = Math.random() * -20; // -20s to 0s

      return (
        <Icon
          key={i}
          className="icon-float"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  }, [isMounted]);

  return <div className="background-animation">{animatedIcons}</div>;
}
