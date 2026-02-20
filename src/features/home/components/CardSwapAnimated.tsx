import {
  CurrencyOverview,
  LeaguesOverview,
  AccessoriesOverview,
  ScarabsOverview,
} from "@/assets/images";
import CardSwap, { Card } from "@/components/motion/CardSwap";

export function CardSwapAnimated() {
  return (
    <div className="mb-32" style={{ height: "500px", position: "relative" }}>
      <h1 className="py-4 text-4xl font-semibold text-black dark:text-white">
        <span className="mt-1 text-4xl leading-none font-bold md:text-[4rem]">
          Application Overview
        </span>
      </h1>
      <CardSwap
        width={800}
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card className="flex items-center justify-center overflow-hidden shadow-md">
          <img
            height={720}
            width={1400}
            src={CurrencyOverview}
            className="mx-auto h-full object-cover object-top-left"
          />
        </Card>
        <Card className="flex items-center justify-center overflow-hidden shadow-md">
          <img
            height={720}
            width={1400}
            src={AccessoriesOverview}
            className="mx-auto h-full object-cover object-top-left"
          />
        </Card>
        <Card className="flex items-center justify-center overflow-hidden shadow-md">
          <img
            height={720}
            width={1400}
            src={ScarabsOverview}
            className="mx-auto h-full object-cover object-top-left"
          />
        </Card>
        <Card className="flex items-center justify-center overflow-hidden shadow-md">
          <img
            height={720}
            width={1400}
            src={LeaguesOverview}
            className="mx-auto h-full object-cover object-top-left"
          />
        </Card>
      </CardSwap>
    </div>
  );
}
