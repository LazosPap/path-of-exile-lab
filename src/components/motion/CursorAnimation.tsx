import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import type { CursorAnimationProps } from "@/types/motion";

/**
 * Motion component that has Gsap animation cursor that follows the mouse in a specific section.
 * We pass the children and the images array.
 */
export function CursorAnimation({ children, images }: CursorAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null); // wrap children for animation
  const indexRef = useRef(0);

  const lastX = useRef(0);
  const lastY = useRef(0);

  const [distanceThreshold, setDistanceThreshold] = useState(window.innerWidth < 900 ? 90 : 150);

  const createTrail = (x: number, y: number) => {
    const img = document.createElement("img");
    img.className = "absolute pointer-events-none object-cover opacity-0 z-[1000]";
    img.src = images[indexRef.current];

    indexRef.current = (indexRef.current + 1) % images.length;

    if (containerRef.current) {
      containerRef.current.appendChild(img);
    }

    gsap.set(img, {
      x,
      y,
      scale: 0,
      opacity: 0,
      rotation: gsap.utils.random(-20, 20),
    });

    gsap.to(img, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(img, {
      scale: 0.2,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.in",
      onComplete: () => {
        img.remove();
      },
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > distanceThreshold) {
        createTrail(e.clientX, e.clientY);
        lastX.current = e.clientX;
        lastY.current = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [distanceThreshold]);

  useEffect(() => {
    const handleResize = () => {
      setDistanceThreshold(window.innerWidth < 900 ? 90 : 150);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" ref={containerRef}>
      <div ref={childRef}>{children}</div>
    </section>
  );
}
