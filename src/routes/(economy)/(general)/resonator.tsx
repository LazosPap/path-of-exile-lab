import { createFileRoute } from "@tanstack/react-router";

import { ResonatorPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/resonator")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ResonatorPage />;
}
