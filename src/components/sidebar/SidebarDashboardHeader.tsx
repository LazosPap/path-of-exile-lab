import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { CheckIcon, Minus } from "lucide-react";
import { memo } from "react";

import Path_of_exile_logo from "@/assets/images/Path_of_Exile_Logo.svg";
import ButtonWrapper from "@/components/button/ButtonWrapper";
import { DropdownMenuAvatar } from "@/components/dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { DropdownMenuItem } from "@/components/shadcn/dropdown-menu";
import { Separator } from "@/components/shadcn/separator";
import { SidebarTrigger } from "@/components/shadcn/sidebar";
import { useLeagues } from "@/hooks/leagues";

export const SidebarDashboardHeader = memo(() => {
  const { leaguesData, selectedLeague, setSelectedLeague } = useLeagues();
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
        >
          {" "}
          <DropdownMenuAvatar
            trigger={
              <ButtonWrapper variant="outline">
                {selectedLeague ? selectedLeague.name : "Choose League"}
              </ButtonWrapper>
            }
            menuLabel="Current Leagues"
            contentClassName="w-96"
          >
            {leaguesData?.map((league, index) => (
              <DropdownMenuItem
                onClick={() => setSelectedLeague(league)}
                key={index}
                className="flex justify-between"
              >
                <Avatar className="w-12">
                  <AvatarImage src={Path_of_exile_logo} alt={league.name} />
                  <AvatarFallback className="text-xs">{league.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col">
                  <span className="text-popover-foreground">{league.name}</span>
                  <span className="text-muted-foreground inline-flex text-xs">
                    {/* Check if we get from the API a valid end date to display it. */}
                    {league?.start_date && format(parseISO(league.start_date), "dd MMM yyyy")}
                    <Minus />
                    {league?.end_date && !league.end_date.startsWith("0001-01-01")
                      ? format(parseISO(league.end_date), "dd MMM yyyy")
                      : "Ongoing"}
                  </span>
                </div>
                {selectedLeague === league && <CheckIcon className="text-primary ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuAvatar>
        </motion.div>
      </div>
    </header>
  );
});
