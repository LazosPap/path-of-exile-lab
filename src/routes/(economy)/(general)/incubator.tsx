import { createFileRoute } from "@tanstack/react-router";

import { IncubatorPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/incubator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <IncubatorPage />;
}
