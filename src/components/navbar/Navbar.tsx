import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { format, parseISO } from "date-fns";
import { Book, CheckIcon, Menu, Minus, Sunset, Trees, Zap } from "lucide-react";
import { useState } from "react";

import Path_of_exile_logo from "@/assets/images/Path_of_Exile_Logo.svg";
import PoeLabLogo from "@/assets/images/Poe_lab_logo.svg";
import ButtonWrapper from "@/components/button/ButtonWrapper";
import { DropdownMenuAvatar } from "@/components/dropdown";
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
import { LEAGUES_ENDPOINTS } from "@/constants/endpoints";
import { cn } from "@/lib/utils";
import { getLeaguesQueryOptions } from "@/queries/leagues";

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
      title: "Products",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description: "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Status",
          description: "Check the current status of our services and APIs",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Leagues",
      url: "/leagues",
    },
  ],

  className,
}: NavbarProps) => {
  /** Control the state of the selection league the user clicks. */
  const [selectLeague, setSelectLeague] = useState<string>();

  /** Call the query for the leagues dropdown data. */
  const { data } = useQuery(getLeaguesQueryOptions({ endpoint: LEAGUES_ENDPOINTS.LEAGUES }));

  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
              <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <ModeToggle />
            <DropdownMenuAvatar
              trigger={
                <Button variant="outline">{selectLeague ? selectLeague : "Choose League"}</Button>
              }
              menuLabel="Current Leagues"
              contentClassName="w-96"
            >
              {data?.map((league, index) => (
                <DropdownMenuItem
                  onClick={() => setSelectLeague(league?.name)}
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
                  {selectLeague === league.name && <CheckIcon className="ml-auto text-primary" />}
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
                    {data?.map((league, index) => (
                      <DropdownMenuItem key={index} className="flex justify-between">
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
