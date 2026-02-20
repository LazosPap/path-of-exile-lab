import { createFileRoute } from "@tanstack/react-router";

import { EntityPage } from "@/components/entity";

export const Route = createFileRoute("/(economy)/(atlas)/scarab")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EntityPage entityKey="SCARABS" />;
}
