import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/shadcn/chart";

import type { GraphChartProps } from "@/types/shadcnWrappers";

export function ChartGraph<T>({
  data,
  xKey = "index",
  yKey = "value",
  xAxis = false,
  yAxis = false,
  showTooltip = false,
  className
}: GraphChartProps<T>) {

  const chartConfig = {
    series: {
      label: yKey,
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig

  const gradientId = `fill-${yKey}`

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data ?? []}
            margin={{ top: 10, bottom: 5, left: 12, right: 12 }}
          >
            {xAxis && <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontWeight={"bold"}
              interval="preserveStartEnd"
            />
            }
            {yAxis && <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={10}
              fontWeight={"bold"}
              allowDecimals={false}
            />}

            {showTooltip && (
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            )}

            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartConfig.series.color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartConfig.series.color} stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              dataKey={String(yKey)}
              type="natural"
              fill={`url(#${gradientId})`}
              fillOpacity={0.4}
              stroke={chartConfig.series.color}
              stackId="a"
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  )
}