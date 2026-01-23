import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Navbar } from "@/components/navbar";

const RootLayout = () => (
  <>
    <div className="container mx-auto min-h-screen px-4">
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
