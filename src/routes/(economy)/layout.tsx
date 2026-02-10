import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";

import { LoadingSpinner } from "@/components/loadingSpinner";
import { Separator } from "@/components/shadcn/separator";
import {
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/shadcn/sidebar";
import { SidebarDashboard, SidebarDashboardHeader } from "@/components/sidebar";
import { CATEGORIES_ENDPOINTS } from "@/constants/endpoints";
import { SIDEBAR_ITEMS } from "@/constants/sidebarItems";
import { getCategoriesQueryOptions } from "@/queries/categories";

export const Route = createFileRoute("/(economy)")({
  component: RouteComponent,
});

function RouteComponent() {
  /** Location for the bg selection. */
  const location = useLocation();

  /** Query for the categories. */
  const { data, isFetching, isLoading } = useQuery(
    getCategoriesQueryOptions({ endpoint: CATEGORIES_ENDPOINTS.CATEGORIES }),
  );

  /**
   * Merge api with my constnat so I can seperate the categories, sort them and also insert icon for each one.
   * Also return the icon and route so we can autocomplete from the TS and use it on the mapping of each category.
   */
  const sidebarSections = SIDEBAR_ITEMS.map((section) => ({
    ...section,
    categories: section.categories
      .map((cfgCategory) => {
        const apiCategory = data?.find((apiCat) => apiCat.name === cfgCategory.name);
        return apiCategory
          ? { ...apiCategory, icon: cfgCategory.icon, route: cfgCategory.route }
          : null;
      })
      .filter(Boolean),
  }));

  /** First initial fetch put a spinner. */
  if (isLoading) return <LoadingSpinner />;

  return (
    <SidebarProvider>
      <SidebarDashboard>
        {sidebarSections.map((section) => {
          /** Safe guard for the categories. */
          if (!section.categories.length) return null;

          return (
            <div key={section.name} className="mb-4 grid gap-2">
              {/* Section label */}
              <Separator />
              <SidebarGroupLabel>{section.name}</SidebarGroupLabel>

              {/* Section categories */}
              {section.categories.map((category) => {
                if (!category?.route) return null;

                /** Selected sidebar item to focus the bg color. */
                const isActive =
                  location.pathname === category?.route ||
                  location.pathname.startsWith(category?.route);
                return (
                  <SidebarMenuItem key={category?.route}>
                    <SidebarMenuButton asChild isActive={isActive} className="h-12">
                      <Link to={category?.route} className="flex items-center gap-2">
                        {/* ICON */}
                        <div className="flex size-10 w-fit shrink-0 items-center justify-center">
                          {isFetching && <LoadingSpinner />}
                          <img
                            src={category?.icon}
                            alt={category?.display}
                            className="h-full w-14 object-contain"
                          />
                        </div>

                        {/* LABEL */}
                        <span className="truncate">{category?.display}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </div>
          );
        })}
      </SidebarDashboard>
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
