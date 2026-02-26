import { HomeIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/breadcrumb";

export type BreadcrumbOutlineProps = {
  category: string;
  itemName: string | undefined;
};

export function BreadcrumbOutline({ category, itemName }: BreadcrumbOutlineProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="h-8 gap-2 rounded-md border px-3 text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon className="size-4" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${category}`}>{category}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{itemName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
