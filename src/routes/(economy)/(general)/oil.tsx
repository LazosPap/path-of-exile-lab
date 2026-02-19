import { createFileRoute } from "@tanstack/react-router";

import { OilPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/oil")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OilPage />;
}
