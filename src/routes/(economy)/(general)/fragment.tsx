import { createFileRoute } from "@tanstack/react-router";

import { FragmentPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/fragment")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FragmentPage />;
}
