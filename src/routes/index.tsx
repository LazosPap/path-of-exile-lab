import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";

import { ChartGraph } from "@/components/charts";
import { AnimatedDiv } from "@/components/motion";
import { CursorAnimation } from "@/components/motion/CursorAnimation";
import GridMotion from "@/components/motion/GridMotion";
import { Card, CardContent, CardHeader } from "@/components/shadcn/card";
import { HISTORY_ENDPOINTS } from "@/constants/endpoints";
import { CURRENCY_IMAGES_URLS, IMAGES_URLS } from "@/constants/imagesUrls";
import { CardSwapAnimated, ContainerScrollAnimation } from "@/features/home/components";
import { getItemDetailsOptions } from "@/queries/search";
import { HomeLayout } from "@/routes/(home)/layout";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  /** Loop all the constants images we have for the GridMotion component. */
  const imageItems = Object.values(IMAGES_URLS).flatMap((category) => Object.values(category));

  const images = Object.values(CURRENCY_IMAGES_URLS);

  /** Hardtext the league and the item id to show the Mirror of Kalandra all the time. */
  const { data } = useQuery(
    getItemDetailsOptions({
      endpoint: HISTORY_ENDPOINTS.HISTORY,
      queryParams: {
        league: "Standard",
        id: 209,
      },
    }),
  );

  const lastMonthData = data?.filter((item) => {
    const itemDate = new Date(item.date)

    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

    return itemDate >= oneMonthAgo
  })

  const chartData = lastMonthData?.map((item) => ({
    index: format(new Date(item.date), "MMM d"),
    value: item.mean ?? 0,
  }));

  return (
    <HomeLayout>
      <AnimatedDiv>
        <ContainerScrollAnimation />
      </AnimatedDiv>

      <h1 className="py-4 text-4xl font-semibold text-black dark:text-white">
        <span className="mt-1 text-4xl leading-none font-bold md:text-[4rem]">
          Follow the currency flow
        </span>
      </h1>
      <p className="text-xl ">
        You can check price history of each item from the start of the league
      </p>

      <Card className="bg-background">
        <CardHeader>
          <div className=" flex text-center gap-4 items-center">
            <img src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lEdXBsaWNhdGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/7111e35254/CurrencyDuplicate.png" className="w-20 h-20" />
            <h1 className="text-4xl font-semibold dark:text-white text-black">
              Mirror of Kalandra
            </h1>
          </div>
        </CardHeader>
        <CardContent className="w-full lg:h-[calc(100vh-9rem)] h-72 relative">
          <CursorAnimation images={images}>
            <ChartGraph data={chartData} xAxis yAxis showTooltip className="h-0" />
          </CursorAnimation>
        </CardContent>
      </Card>


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
        <div className="overflow-hidden">
          <CardSwapAnimated />
        </div>
      </AnimatedDiv>
    </HomeLayout>
  );
}
