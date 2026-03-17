"use client";

import { useRef, useCallback } from "react";
import styles from "./TiltCard.module.css";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;       // max rotation in degrees
  perspective?: number;   // CSS perspective in px
  scale?: number;         // scale on hover
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  perspective = 900,
  scale = 1.03,
}: TiltCardProps) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const currRef  = useRef({ rx: 0, ry: 0 });
  const targetRef = useRef({ rx: 0, ry: 0 });
  const hovered  = useRef(false);

  /* lerp animation loop */
  const animate = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    const LERP = 0.1;
    currRef.current.rx += (targetRef.current.rx - currRef.current.rx) * LERP;
    currRef.current.ry += (targetRef.current.ry - currRef.current.ry) * LERP;

    const { rx, ry } = currRef.current;

    /* stop loop once settled (on mouse leave) */
    const settled = !hovered.current &&
      Math.abs(rx) < 0.01 && Math.abs(ry) < 0.01;

    card.style.transform = settled
      ? "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"
      : `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${hovered.current ? scale : 1})`;

    if (!settled) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [perspective, scale]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect   = card.getBoundingClientRect();
    /* normalise mouse to [-0.5, 0.5] */
    const nx = (e.clientX - rect.left)  / rect.width  - 0.5;
    const ny = (e.clientY - rect.top)   / rect.height - 0.5;

    /* rotateX responds to vertical position (invert Y so top = tilt back) */
    targetRef.current.ry =  nx * maxTilt * 2;
    targetRef.current.rx = -ny * maxTilt * 2;
  }, [maxTilt]);

  const handleMouseEnter = useCallback(() => {
    hovered.current = true;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleMouseLeave = useCallback(() => {
    hovered.current = false;
    targetRef.current = { rx: 0, ry: 0 };
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  return (
    <div
      ref={cardRef}
      className={`${styles.tilt} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* subtle specular highlight that follows mouse */}
      <div className={styles.glare} aria-hidden />
      {children}
    </div>
  );
}
