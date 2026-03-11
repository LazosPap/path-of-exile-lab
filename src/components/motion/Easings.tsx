import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import type { SplitTextAnimationProps } from "@/types/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Easings({ children }: SplitTextAnimationProps) {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('.box', {
            opacity: 0,
            y: 300,
            duration: 1,
            scale: 0.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play pause resume pause"
            }
        });
        gsap.to('.box', {
            opacity: 1,
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play pause resume pause"
            }
        });
    }, { scope: container });

    return (
        <div ref={container} className="text-4xl">
            <div className="box">
                {children}
            </div>
        </div>
    )
}