import { createFileRoute } from "@tanstack/react-router";

import { EntityPage } from "@/components/entity";

export const Route = createFileRoute("/(economy)/(atlas)/uniqueMap")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EntityPage entityKey="UNIQUE_MAPS" />;
}
