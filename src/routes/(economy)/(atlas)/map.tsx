import { createFileRoute } from "@tanstack/react-router";

import { EntityPage } from "@/components/entity";

export const Route = createFileRoute("/(economy)/(atlas)/map")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EntityPage entityKey="MAPS" />;
}
