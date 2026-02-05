import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/shadcn/button";
import { cn } from "@/lib/utils";

import type { ButtonWrapperProps } from "@/types/shadcnWrappers/shadcnWrappers";

/** Reusable button wrapper that we are extending it from the shadcn. */
export default function ButtonWrapper({ children, isPending, ...props }: ButtonWrapperProps) {
  return (
    <Button
      {...props}
      disabled={props?.disabled || isPending}
      className={cn("cursor-pointer font-semibold", props.className)}
    >
      {isPending ? (
        <LoaderCircleIcon className="-ms-1 animate-spin" size={16} aria-hidden="true" />
      ) : (
        children
      )}
    </Button>
  );
}
