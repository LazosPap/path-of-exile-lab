import { ResponsiveContainer, AreaChart, Area } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/shadcn/chart";

interface MiniChartProps {
  data: { date: string; meanPrice: number }[];
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function MiniChart({ data }: MiniChartProps) {
  const chartData = data?.map((item, index) => ({
    index,
    value: item.meanPrice,
    date: item.date,
  }));

  return (
    <div className="h-16 w-32">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              bottom: 5,
              left: 12,
              right: 12,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
