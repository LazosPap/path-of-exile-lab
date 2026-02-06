import { motion } from "framer-motion";
import { memo } from "react";

import { Separator } from "@/components/shadcn/separator";
import { SidebarTrigger } from "@/components/shadcn/sidebar";

export const SidebarDashboardHeader = memo(() => {
  return (
    <header
      className="bg-sidebar sticky top-0 z-20 flex h-16 w-full shrink-0 items-center gap-2 border-b
        backdrop-blur transition-[width,height] ease-linear
        group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
    >
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>

      <div className="mr-10 ml-auto flex items-center gap-2 px-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8"
        ></motion.div>
      </div>
    </header>
  );
});
