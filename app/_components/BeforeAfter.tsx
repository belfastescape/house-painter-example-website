"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import styles from "@/app/_components/BeforeAfter.module.css";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-reveal>
          <span className="label-badge">See the difference</span>
          <h2 className={styles.heading}>Before &amp; after</h2>
          <p className={styles.intro}>Drag the slider to reveal the transformation.</p>
        </div>

        <div
          ref={containerRef}
          className={styles.slider}
          data-reveal
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          role="img"
          aria-label="Before and after comparison of an exterior house painting project"
        >
          {/* After (base) */}
          <div className={styles.after}>
            <Image
              src="/images/project-exterior-blue-house.webp"
              alt="After: freshly painted exterior"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className={styles.img}
            />
            <span className={styles.labelRight}>After</span>
          </div>

          {/* Before (clipped overlay) */}
          <div className={styles.before} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <Image
              src="/uploads/painter-rolling-exterior-trim.webp"
              alt="Before: weathered exterior prior to repainting"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className={styles.img}
            />
            <span className={styles.labelLeft}>Before</span>
          </div>

          {/* Handle */}
          <div className={styles.handle} style={{ left: `${position}%` }}>
            <div className={styles.handleBar} />
            <div className={styles.handleCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" width="18" height="18">
                <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
              </svg>
            </div>
            <div className={styles.handleBar} />
          </div>
        </div>
      </div>
    </section>
  );
}
