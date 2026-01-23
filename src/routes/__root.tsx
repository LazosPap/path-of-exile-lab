import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/context/theme";

const RootLayout = () => (
  <>
    <ThemeProvider>
      <div className="container mx-auto min-h-screen px-4">
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
