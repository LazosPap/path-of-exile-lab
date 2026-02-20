import { createFileRoute } from "@tanstack/react-router";

import { EntityPage } from "@/components/entity";

export const Route = createFileRoute("/(economy)/(atlas)/deliriumOrb")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EntityPage entityKey="DELIRIUM_ORBS" />;
}
