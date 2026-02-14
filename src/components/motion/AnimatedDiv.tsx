import { MotionDiv } from "@/components/motion/MotionDiv";

import type { AnimateDivProps } from "@/types/motion";

/**
 *  Reusable AnimatedDiv
 *  This is an animation for the divs only and it can be used for single usage or with mapping.
 *
 *  For the mapping behavior we have the index prop that will take the number and make the effect
 *  of the animation to have an order for example("It will start the animation with the first index
 *  and it will put a delay on the next index to")
 */
export function AnimatedDiv({ index = 0, children, ...props }: AnimateDivProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: index * 0.1, ease: "easeInOut", duration: 0.3 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
