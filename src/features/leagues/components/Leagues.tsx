import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { Minus } from "lucide-react";

import { LeagueBanner } from "@/assets/images";
import { TiltedCard } from "@/components/cards";
import { AnimatedDiv } from "@/components/motion";
import { TiltedCardSkeleton } from "@/components/skeletons/cards";
import { LEAGUES_ENDPOINTS } from "@/constants/endpoints";
import { getLeaguesQueryOptions } from "@/queries/leagues";

export function Leagues() {
  const { data, isLoading } = useQuery(
    getLeaguesQueryOptions({ endpoint: LEAGUES_ENDPOINTS.LEAGUES }),
  );

  /** Set the number of the loop as 9 because that's how many we are getting from the API. */
  const skeletonCount = 9;

  /** Create a skeleton for the first fetch from the API. */
  if (isLoading)
    return (
      <div
        className="mx-auto grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4"
      >
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <TiltedCardSkeleton key={index} />
        ))}
      </div>
    );
  return (
    <section>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-semibold">Leagues</h1>
            <p className="text-muted-foreground my-4">
              Check all the current leaagues that are available.
            </p>
          </div>
        </div>
      </div>

      <div
        className="mx-auto grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4"
      >
        {data?.map((league, index) => (
          <AnimatedDiv index={index}>
            <TiltedCard
              key={index}
              imageSrc={LeagueBanner}
              altText={league?.name}
              captionText={league?.name}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              displayOverlayContentBottom
              /**This is the top label. */
              overlayContent={
                <p
                  className="text-secondary m-8 rounded-[15px] bg-black/40 px-4 py-2 font-black
                    tracking-[-0.5px] capitalize shadow-[0_5px_30px_#06001059]"
                >
                  {league?.name}
                </p>
              }
              /**This is the bottom label. */
              overlayContentBottom={
                <p
                  className="text-primary m-8 flex flex-row rounded-[15px] bg-black/40 px-4 py-2
                    font-black tracking-[-0.5px] capitalize shadow-[0_5px_30px_#06001059]"
                >
                  {/* Check if we get from the API a valid end date to display it. */}
                  {league?.start_date && format(parseISO(league.start_date), "dd MMM yyyy")}
                  <Minus />
                  {league?.end_date && !league.end_date.startsWith("0001-01-01")
                    ? format(parseISO(league.end_date), "dd MMM yyyy")
                    : "Ongoing"}
                </p>
              }
            />
          </AnimatedDiv>
        ))}
      </div>
    </section>
  );
}
