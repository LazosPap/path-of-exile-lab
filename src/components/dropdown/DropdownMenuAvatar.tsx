import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";

import type { DropdownMenuAvatarProps } from "@/types/shadcnWrappers";

/** Create a core dropdown menu with more usage with avatar inside the "DropdownMenuItem". */
export function DropdownMenuAvatar({
  trigger,
  menuLabel,
  children,
  contentClassName,
  ...groupProps
}: DropdownMenuAvatarProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={contentClassName} align="end">
        {menuLabel && <DropdownMenuLabel className="text-primary">{menuLabel}</DropdownMenuLabel>}
        <DropdownMenuSeparator />
        <DropdownMenuGroup {...groupProps}>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
