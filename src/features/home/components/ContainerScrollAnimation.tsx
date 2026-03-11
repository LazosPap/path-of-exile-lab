import { CurrencyOverview } from "@/assets/images";
import { SplitTextAnimation } from "@/components/motion";
import { Easings } from "@/components/motion/Easings";
import { ContainerScroll } from "@/components/shadcn/container-scroll-animation";

export function ContainerScrollAnimation() {
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
                <SplitTextAnimation>
                  Live item prices
                </SplitTextAnimation>
              </span>
            </h1>
          </>
        }
      >
        <Easings>
          <img
            src={CurrencyOverview}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-top-left"
            draggable={false}
          />
        </Easings>
      </ContainerScroll>
    </div >
  );
}
