import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { format, parseISO } from "date-fns";
import { CheckIcon, Menu, Minus } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "use-debounce";

import Path_of_exile_logo from "@/assets/images/Path_of_Exile_Logo.svg";
import PoeLabLogo from "@/assets/images/Poe_lab_logo.svg";
import ButtonWrapper from "@/components/button/ButtonWrapper";
import { DropdownMenuAvatar } from "@/components/dropdown";
import { AutoComplete } from "@/components/inputs/Autocomplete";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import { DropdownMenuItem } from "@/components/shadcn/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/sheet";
import { SEARCH_ENDPOINTS } from "@/constants/endpoints";
import { useLeagues } from "@/hooks/leagues";
import { cn } from "@/lib/utils";
import { getSearchQueryOptions } from "@/queries/search";

import type { GetSearchParams } from "@/types/endpointsServices";
import type { MenuItem, NavbarProps } from "@/types/navbar";

const Navbar = ({
  logo = {
    url: "/",
    src: PoeLabLogo,
    alt: "logo",
    title: "",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Economy",
      url: "/currency",
    },
    {
      title: "Leagues",
      url: "/leagues",
    },
  ],

  className,
}: NavbarProps) => {
  /** Call the global hook for the leagues selection. */
  const { leaguesData, isFetching, selectedLeague, setSelectedLeague } = useLeagues();

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");

  const [debouncedSearch] = useDebounce(searchValue, 300);

  const params: GetSearchParams = {
    league: selectedLeague?.name,
    q: debouncedSearch,
  };

  const {
    data,
    isLoading,
    isFetching: searchFetching,
  } = useQuery(
    getSearchQueryOptions({
      endpoint: SEARCH_ENDPOINTS.SEARCH,
      queryParams: params,
      enabled: !!selectedLeague?.name,
    }),
  );

  const items = data?.map((item) => ({
    value: item.id,
    label: item.name,
    icon: item.icon,
  }));

  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-24 dark:invert" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <AutoComplete
            selectedValue={selectedValue}
            placeholder="Search items..."
            onSelectedValueChange={setSelectedValue}
            searchValue={searchValue}
            onSearchValueChange={setSearchValue}
            items={items ?? []}
            isLoading={isLoading}
            isFetching={searchFetching}
            disabled={!selectedLeague}
            emptyMessage="No items found."
          />
          <div className="flex gap-2">
            <ModeToggle />
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
                  {isFetching && <LoadingSpinner />}
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
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <AutoComplete
                    selectedValue={selectedValue}
                    placeholder="Search items..."
                    onSelectedValueChange={setSelectedValue}
                    searchValue={searchValue}
                    onSearchValueChange={setSearchValue}
                    items={items ?? []}
                    isLoading={isLoading}
                    isFetching={searchFetching}
                    disabled={!selectedLeague}
                    emptyMessage="No items found."
                  />
                  <ModeToggle />
                  <DropdownMenuAvatar
                    trigger={
                      <ButtonWrapper className="w-1/2" variant="outline">
                        Choose League
                      </ButtonWrapper>
                    }
                    menuLabel="Current Leagues"
                    contentClassName="w-96"
                  >
                    {leaguesData?.map((league, index) => (
                      <DropdownMenuItem key={index} className="flex justify-between">
                        {isFetching && <LoadingSpinner />}
                        <Avatar className="w-12">
                          <AvatarImage src={Path_of_exile_logo} alt={league.name} />
                          <AvatarFallback className="text-xs">{league.name}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-col">
                          <span className="text-popover-foreground">{league.name}</span>
                          <span className="text-muted-foreground inline-flex text-xs">
                            {/* Check if we get from the API a valid end date to display it. */}
                            {league?.start_date &&
                              format(parseISO(league.start_date), "dd MMM yyyy")}
                            <Minus />
                            {league?.end_date && !league.end_date.startsWith("0001-01-01")
                              ? format(parseISO(league.end_date), "dd MMM yyyy")
                              : "Ongoing"}
                          </span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuAvatar>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        to={item.url}
        className="group bg-background hover:bg-muted hover:text-accent-foreground inline-flex h-10
          w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium
          transition-colors"
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 flex-row gap-4 rounded-md
        p-3 leading-none no-underline transition-colors outline-none select-none"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">{item.description}</p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
