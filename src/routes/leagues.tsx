import { createFileRoute } from "@tanstack/react-router";

import { Leagues } from "@/features/leagues/components";

export const Route = createFileRoute("/leagues")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Leagues />;
}
