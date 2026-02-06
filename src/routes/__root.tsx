import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/context/theme";

const RootLayout = () => (
  <>
    <ThemeProvider>
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </ThemeProvider>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
