import { createFileRoute } from "@tanstack/react-router";

import { HomeLayout } from "@/routes/(home)/layout";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <HomeLayout>
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    </HomeLayout>
  );
}
