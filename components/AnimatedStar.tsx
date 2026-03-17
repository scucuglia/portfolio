"use client";

import { useRef, useEffect, useCallback } from "react";

interface AnimatedStarProps {
  size?: number;
  color?: string;
}

export default function AnimatedStar({ size = 16, color = "#7B6EE8" }: AnimatedStarProps) {
  const pathRef   = useRef<SVGPathElement>(null);
  const stateRef  = useRef({
    angle:      0,
    omega:      0,
    pulse:      0,
    hovered:    false,
    exiting:    false,
    exitTarget: 0,
    rafId:      0,
  });

  const tick = useCallback(() => {
    const s    = stateRef.current;
    const path = pathRef.current;
    if (!path) return;

    const MAX_OMEGA   = 4.2;
    const ACCEL       = 0.055;
    const SNAP_SPEED  = 0.12;
    const PULSE_SPEED = 0.018;
    const PULSE_AMP   = 0.06;

    s.pulse += PULSE_SPEED;
    const pScale = 1 + Math.sin(s.pulse) * PULSE_AMP;

    if (s.hovered) {
      s.omega  += (MAX_OMEGA - s.omega) * ACCEL;
      s.angle  += s.omega;
      s.exiting = false;
    } else if (s.exiting) {
      const diff = s.exitTarget - s.angle;
      if (Math.abs(diff) < 0.05) {
        s.angle   = s.exitTarget;
        s.exiting = false;
        s.omega   = 0;
      } else {
        s.angle += diff * SNAP_SPEED;
      }
    } else {
      s.omega = 0;
    }

    path.style.transform = `rotate(${s.angle}deg) scale(${pScale})`;
    s.rafId = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const s   = stateRef.current;
    s.rafId   = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(s.rafId);
  }, [tick]);

  const handleMouseEnter = useCallback(() => {
    const s   = stateRef.current;
    s.hovered = true;
    s.exiting = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const s     = stateRef.current;
    s.hovered   = false;
    s.exiting   = true;
    const minBack     = Math.max(s.omega * 8, 45);
    const step        = 90;
    s.exitTarget      = Math.floor((s.angle - minBack) / step) * step;
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-flex", cursor: "pointer" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        style={{ overflow: "visible" }}
      >
        <path
          ref={pathRef}
          d="M50 0C50 0 50.6025 27.268 61.6673 38.3327C72.732 49.3975 100 50 100 50C100 50 72.732 50.6025 61.6673 61.6673C50.6025 72.732 50 100 50 100C50 100 49.3975 72.732 38.3327 61.6673C27.268 50.6025 0 50 0 50C0 50 27.268 49.3975 38.3327 38.3327C49.3975 27.268 50 0 50 0Z"
          fill={color}
          style={{ transformOrigin: "50px 50px", transformBox: "fill-box" }}
        />
      </svg>
    </div>
  );
}
