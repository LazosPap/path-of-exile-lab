import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

import type { SplitTextAnimationProps } from "@/types/motion";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function SplitTextAnimation({ children, duration, stagger }: SplitTextAnimationProps) {
  const container = useRef(null);
  useGSAP(
    () => {
      SplitText.create(".words", {
        type: "words, chars",
        onSplit(self) {
          gsap.from(self.words, {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: duration ? duration : 0.7,
            ease: "back",
            stagger: stagger ? stagger : 0.01,
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              toggleActions: "play pause resume pause",
            },
          });
        },
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className="container">
      <span className="words">{children}</span>
    </div>
  );
}
