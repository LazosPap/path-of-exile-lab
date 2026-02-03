import type { TiltedCardProps } from "@/types/cards";

export function TiltedCardSkeleton({
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  displayOverlayContent = false,
  displayOverlayContentBottom = false,
}: Partial<TiltedCardProps>) {
  return (
    <figure
      className="relative flex h-full w-full flex-col items-center justify-center
        perspective-midrange"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      {/* Main card skeleton */}
      <div
        className="relative rounded-[15px] bg-gray-300"
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      >
        {/* Top overlay placeholder */}
        {displayOverlayContent && (
          <div
            className="absolute top-0 left-0 z-10 h-8 w-full rounded-t-[15px] bg-gray-400
              opacity-70"
          />
        )}

        {/* Bottom overlay placeholder */}
        {displayOverlayContentBottom && (
          <div
            className="absolute bottom-0 left-0 z-10 h-8 w-full rounded-b-[15px] bg-gray-400
              opacity-70"
          />
        )}
      </div>
    </figure>
  );
}
