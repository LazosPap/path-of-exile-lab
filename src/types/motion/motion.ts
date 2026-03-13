import type { ReactNode } from "react";

export type AnimateDivProps = {
  index?: number;
  children: ReactNode;
};

export interface SplitTextAnimationProps {
  children: ReactNode;
  duration?: number;
  stagger?: number;
}

export interface ImageAnimationProps {
  images: string[];
}

export interface CursorAnimationProps {
  children: ReactNode;
  images: string[];
}
