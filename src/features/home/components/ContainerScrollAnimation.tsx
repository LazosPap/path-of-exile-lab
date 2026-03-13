import { AccessoriesOverview, CurrencyOverview, ItemPrice, LeaguesOverview } from "@/assets/images";
import { ImageAnimation, SplitTextAnimation } from "@/components/motion";
import { ContainerScroll } from "@/components/shadcn/container-scroll-animation";

export function ContainerScrollAnimation() {
  const images = [AccessoriesOverview, LeaguesOverview, ItemPrice];
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              <SplitTextAnimation>
                Welcome to POE Lab <br />
              </SplitTextAnimation>
              <span className="mt-1 text-4xl leading-none font-bold md:text-[6rem]">
                <SplitTextAnimation>Live item prices</SplitTextAnimation>
              </span>
            </h1>
          </>
        }
      >
        <div className="relative mx-auto aspect-square w-full max-w-[1400px] lg:aspect-1400/800">
          {/* First image on the tablet */}
          <img
            src={CurrencyOverview}
            alt="hero"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover"
            draggable={false}
          />

          {/* Animation slider */}
          <ImageAnimation images={images} />
        </div>
      </ContainerScroll>
    </div>
  );
}
