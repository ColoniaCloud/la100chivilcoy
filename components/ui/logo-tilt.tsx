"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function LogoTilt() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      el.style.transform = `perspective(800px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const updateTarget = (clientX: number, clientY: number) => {
      const dx = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const dy = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      targetY = dx * 18;
      targetX = -dy * 18;
    };

    const resetTarget = () => {
      targetX = 0;
      targetY = 0;
    };

    const onMouseMove = (e: MouseEvent) => updateTarget(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      updateTarget(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", resetTarget);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", resetTarget);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", resetTarget);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", resetTarget);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ willChange: "transform" }}>
      <Image
        src="/logo2.png"
        alt="La 100 Chivilcoy"
        width={320}
        height={320}
        className="logo w-[220px] h-auto md:w-[380px]"
        priority
      />
    </div>
  );
}
