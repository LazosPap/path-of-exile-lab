import { createFileRoute } from "@tanstack/react-router";

import { ContainerScrollAnimation } from "@/features/home/components";
import { HomeLayout } from "@/routes/(home)/layout";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <HomeLayout>
      <ContainerScrollAnimation />
    </HomeLayout>
  );
}
