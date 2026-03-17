import { useEffect } from "react";

export function useLiquidGlass(
  containerRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Glass shell ──────────────────────────────────────────────
    // The main lens: very light blur (Apple glass is ~transparent),
    // brightness/saturation boost, and a bright specular crescent at top.
    const glass = document.createElement("div");
    Object.assign(glass.style, {
      position: "absolute",
      pointerEvents: "none",
      width: "360px",
      height: "360px",
      borderRadius: "50%",
      // Apple glass: minimal blur, high brightness + saturation to feel like real glass
      backdropFilter: "blur(6px) brightness(1.12) saturate(1.4) contrast(1.06)",
      WebkitBackdropFilter:
        "blur(6px) brightness(1.12) saturate(1.4) contrast(1.06)",
      // Specular: bright crescent at top (THE defining Apple liquid glass feature)
      // + subtle side catch lights + thin bottom reflection
      background: [
        "radial-gradient(ellipse 78% 38% at 50% -4%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.0) 100%)",
        "radial-gradient(ellipse 35% 70% at 2% 50%, rgba(255,255,255,0.13) 0%, transparent 100%)",
        "radial-gradient(ellipse 35% 70% at 98% 50%, rgba(255,255,255,0.13) 0%, transparent 100%)",
        "radial-gradient(ellipse 60% 30% at 50% 102%, rgba(255,255,255,0.18) 0%, transparent 100%)",
        "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.06) 0%, transparent 60%)",
      ].join(", "),
      // Glass border: sharp 1px top highlight + full ring + subtle bottom darkening
      boxShadow: [
        "inset 0 1.5px 0 1px rgba(255,255,255,1.0)",
        "inset 0 0 0 0.75px rgba(255,255,255,0.55)",
        "inset 0 -1px 0 rgba(0,0,0,0.06)",
        "0 12px 48px rgba(0,0,0,0.05)",
      ].join(", "),
      // Chromatic aberration: subtle colored ring at the edge
      outline: "1px solid rgba(123,110,232,0.08)",
      outlineOffset: "-2px",
      // Fade to transparent at edge
      maskImage:
        "radial-gradient(circle, black 52%, rgba(0,0,0,0.55) 70%, transparent 84%)",
      WebkitMaskImage:
        "radial-gradient(circle, black 52%, rgba(0,0,0,0.55) 70%, transparent 84%)",
      transform: "translate(-50%, -50%)",
      opacity: "0",
      transition: "opacity 0.4s ease",
      zIndex: "1",
      willChange: "left, top",
    });

    // ── Inner caustic ────────────────────────────────────────────
    // The bright point/glow inside the lens — moves slower than the glass
    // (parallax) giving a real 3D glass feel.
    const caustic = document.createElement("div");
    Object.assign(caustic.style, {
      position: "absolute",
      pointerEvents: "none",
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)",
      filter: "blur(12px)",
      transform: "translate(-50%, -50%)",
      opacity: "0",
      transition: "opacity 0.4s ease",
      zIndex: "1",
      willChange: "left, top",
    });

    container.appendChild(glass);
    container.appendChild(caustic);

    // Glass position (faster)
    let gx = 0, gy = 0;
    // Caustic position (slower — parallax lag)
    let cx = 0, cy = 0;
    let targetX = 0, targetY = 0;
    let raf: number;
    let entered = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      gx = lerp(gx, targetX, 0.07);
      gy = lerp(gy, targetY, 0.07);
      // Caustic lags behind the glass lens — like the bright spot in a real glass
      cx = lerp(cx, targetX - 30, 0.04);
      cy = lerp(cy, targetY - 30, 0.04);

      glass.style.left = `${gx}px`;
      glass.style.top = `${gy}px`;
      caustic.style.left = `${cx}px`;
      caustic.style.top = `${cy}px`;

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!entered) {
        entered = true;
        gx = targetX; gy = targetY;
        cx = targetX - 30; cy = targetY - 30;
        glass.style.opacity = "1";
        caustic.style.opacity = "1";
      }
    };

    const onLeave = () => {
      entered = false;
      glass.style.opacity = "0";
      caustic.style.opacity = "0";
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      glass.remove();
      caustic.remove();
    };
  }, [containerRef]);
}
