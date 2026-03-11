import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

import type { SplitTextAnimationProps } from "@/types/motion";

gsap.registerPlugin(useGSAP, SplitText, _ScrollTrigger);

export function SplitTextAnimation({ children }: SplitTextAnimationProps) {
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
                        duration: 0.7,
                        ease: "back",
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: container.current,
                            start: "top 80%",
                            toggleActions: "play pause resume pause"
                        }
                    });
                }
            });
        },
        { scope: container }
    );
    return (
        <div ref={container} className="container">
            <span className="words">{children}</span>
        </div>
    )
}