import { createFileRoute } from "@tanstack/react-router";

import { HeistPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/heist")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HeistPage />;
}
