import type { Button } from "@/components/shadcn/button";
import type { ComponentProps, ReactNode } from "react";

/**
 * Import all the types from the shadcn that we want to extend with ...props.
 * Also insert types that doesn't have extend on the shadcnComponents.
 * We use it on all our global components.
 */

export type ShadcnButtonProps = ComponentProps<typeof Button>;

export interface ButtonWrapperProps extends ShadcnButtonProps {
  children: ReactNode;
  isPending?: boolean;
}

export type DropdownMenuAvatarProps = {
  children: ReactNode;
  trigger: ReactNode;
  menuLabel?: string;
  contentClassName?: string;
};
