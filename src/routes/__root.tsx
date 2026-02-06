import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "sonner";

import { LeaguesProvider } from "@/context/leagues";
import { ThemeProvider } from "@/context/theme";

const RootLayout = () => (
  <>
    <ThemeProvider>
      <LeaguesProvider>
        <Outlet />
        <Toaster />
        <TanStackRouterDevtools />
      </LeaguesProvider>
    </ThemeProvider>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
