import { Separator } from "@/components/shadcn/separator";

export function Footer() {
  return (
    <footer>
      <div
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4
          max-md:flex-col sm:px-6 sm:py-4 md:gap-6 md:py-2"
      />

      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{" "}
          <span>poelab is not affiliated with or endorsed by Grinding Gear Games.</span>
        </p>
      </div>
    </footer>
  );
}
