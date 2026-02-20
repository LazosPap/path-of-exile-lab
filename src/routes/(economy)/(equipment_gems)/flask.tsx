import { createFileRoute } from "@tanstack/react-router";

import { EntityPage } from "@/components/entity";

export const Route = createFileRoute("/(economy)/(equipment_gems)/flask")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EntityPage entityKey="FLASKS" />;
}
