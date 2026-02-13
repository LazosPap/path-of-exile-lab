import ContainerImage from "@/assets/images/ContainerImage.png";
import { ContainerScroll } from "@/components/shadcn/container-scroll-animation";

export function ContainerScrollAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to POE Lab <br />
              <span className="mt-1 text-4xl leading-none font-bold md:text-[6rem]">
                Live item prices
              </span>
            </h1>
          </>
        }
      >
        <img
          src={ContainerImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-top-left"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
