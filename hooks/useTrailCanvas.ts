"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  alpha: number;
  radius: number;
}

export function useTrailCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      dotsRef.current.push({
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        alpha: 0.35,
        radius: 3 + Math.random() * 2,
      });

      if (dotsRef.current.length > 60) {
        dotsRef.current.shift();
      }
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current = dotsRef.current.filter((dot) => dot.alpha > 0.01);

      for (const dot of dotsRef.current) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123, 110, 232, ${dot.alpha})`;
        ctx.fill();
        dot.alpha *= 0.9;
        dot.radius *= 0.97;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [canvasRef]);
}
