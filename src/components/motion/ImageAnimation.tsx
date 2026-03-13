import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import type { ImageAnimationProps } from "@/types/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Image slider while scrolling and put the images in the same final destination. */
export function ImageAnimation({ images }: ImageAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const images = imagesRef.current.filter(Boolean);

      const startPositions = [
        { x: "-12%", y: "-85%" },
        { x: "120%", y: "60%" },
        { x: "-120%", y: "60%" },
      ];

      /**
       * We can manipulate also the finalPositions if needed.
       * Just create new props to change the values and not hardtext.
       */
      const finalPositions = [
        { x: "0%", y: "0%", rotation: 0 },
        { x: "0%", y: "0%", rotation: 0 },
        { x: "0%", y: "0%", rotation: 0 },
        { x: "0%", y: "0%", rotation: 0 },
      ];

      images.forEach((image, index) => {
        gsap.set(image, {
          x: startPositions[index].x,
          y: startPositions[index].y,
          rotation: gsap.utils.random(-60, 60),
          scale: 0.5,
          visibility: "visible",
        });
      });

      const timeL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=500", // It's the value of the scroll how much time the animation should last.
          scrub: 2, // How fast is the animation.
        },
      });

      images.forEach((image, index) => {
        timeL.to(
          image,
          {
            x: finalPositions[index].x,
            y: finalPositions[index].y,
            rotation: finalPositions[index].rotation,
            scale: 1,
            ease: "power2.out",
            duration: 1,
          },
          index * 0.3,
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="absolute inset-0 z-20 overflow-hidden">
      <div className="relative mx-auto w-full">
        {images.map((img, index) => (
          <div
            ref={(slide) => {
              imagesRef.current[index] = slide;
            }}
            key={index}
            className="absolute w-full max-w-[1400px]"
          >
            <img src={img} alt={`image-${index + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
