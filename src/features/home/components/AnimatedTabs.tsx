import { CurrencyOverview, LeagueBanner } from "@/assets/images";
import { Tabs } from "@/features/home/components/Tabs";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Currency",
      value: "currency",
      content: (
        <div
          className="from-primary to-primary relative h-full w-full overflow-hidden rounded-2xl
            bg-linear-to-br p-10 text-xl font-bold text-white md:text-4xl"
        >
          <p>Currency Overview</p>
          <img
            src={CurrencyOverview}
            alt="dummy image"
            width="1000"
            height="1000"
            className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover
              object-top-left md:h-[90%]"
          />
        </div>
      ),
    },
    {
      title: "Leagues",
      value: "leagues",
      content: (
        <div
          className="from-secondary to-secondary relative h-full w-full overflow-hidden rounded-2xl
            bg-linear-to-br p-10 text-xl font-bold text-white md:text-4xl"
        >
          <p>Leagues Overview</p>
          <img
            src={LeagueBanner}
            alt="dummy image"
            width="1000"
            height="1000"
            className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover
              object-top-left md:h-[90%]"
          />
        </div>
      ),
    },
  ];

  return (
    <div
      className="b relative mx-auto my-40 flex h-[20rem] w-full max-w-5xl flex-col items-start
        justify-start perspective-[1000px] md:h-[40rem]"
    >
      <Tabs tabs={tabs} />
    </div>
  );
}
