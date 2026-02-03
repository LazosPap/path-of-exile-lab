import type { PageLayoutsParams } from "@/types/layouts";

export function PageLayout({ children }: PageLayoutsParams) {
  return <main className="pt-10">{children}</main>;
}
