import { createFileRoute } from "@tanstack/react-router";

import { EssencePage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/essence")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EssencePage />;
}
