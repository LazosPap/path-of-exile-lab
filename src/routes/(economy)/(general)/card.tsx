import { createFileRoute } from "@tanstack/react-router";

import { CardPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/card")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CardPage />;
}
