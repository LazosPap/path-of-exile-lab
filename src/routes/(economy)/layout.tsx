import { createFileRoute, Outlet } from "@tanstack/react-router";

import { SidebarInset, SidebarProvider } from "@/components/shadcn/sidebar";
import { SidebarDashboard, SidebarDashboardHeader } from "@/components/sidebar";

export const Route = createFileRoute("/(economy)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <SidebarDashboard />
      <SidebarInset>
        <SidebarDashboardHeader />
        <div className="flex flex-1 flex-col gap-2 p-0 pt-0 sm:gap-4 sm:p-4">
          <div className="flex-1 rounded-lg sm:rounded-xl sm:p-4 md:p-6">
            <div className="w-full space-y-4 sm:space-y-6">
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6 xl:col-span-2">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
