/** Tilted card props. */
export interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  overlayContentBottom?: React.ReactNode;
  displayOverlayContent?: boolean;
  displayOverlayContentBottom?: boolean;
}

/** Path of exile item border based on the rarity and type. */
export interface ItemCardProps {
  name: string;
  imageUrl: string;
  rarity?: "unique" | "rare" | "magic" | "normal";
  implicit?: string[];
  explicit?: string[];
  mutated?: string[];
  flavorText?: string;
}
