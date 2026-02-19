import { createFileRoute } from "@tanstack/react-router";

import { FossilPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/fossil")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FossilPage />;
}
