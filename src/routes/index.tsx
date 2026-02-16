import { createFileRoute } from "@tanstack/react-router";

import { AnimatedDiv } from "@/components/motion";
import GridMotion from "@/components/motion/GridMotion";
import { IMAGES_URLS } from "@/constants/imagesUrls";
import { CardSwapAnimated, ContainerScrollAnimation } from "@/features/home/components";
import { HomeLayout } from "@/routes/(home)/layout";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  /** Loop all the constants images we have for the GridMotion component. */
  const imageItems = Object.values(IMAGES_URLS).flatMap((category) => Object.values(category));

  return (
    <HomeLayout>
      <AnimatedDiv>
        <ContainerScrollAnimation />
      </AnimatedDiv>

      <AnimatedDiv>
        <div className="py-10">
          <h1 className="py-4 text-4xl font-semibold text-black dark:text-white">
            <span className="mt-1 text-4xl leading-none font-bold md:text-[4rem]">
              Check all the items price
            </span>
          </h1>
          <GridMotion items={imageItems} gradientColor="black" />
        </div>
      </AnimatedDiv>

      <AnimatedDiv>
        <CardSwapAnimated />
      </AnimatedDiv>
    </HomeLayout>
  );
}
