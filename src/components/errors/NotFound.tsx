import { Link } from "@tanstack/react-router";

import ButtonWrapper from "@/components/button/ButtonWrapper";

export function NotFound() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <h2 className="mb-6 text-5xl font-semibold">Whoops!</h2>
        <h3 className="mb-1.5 text-3xl font-semibold">Something went wrong</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          The page you&apos;re looking for isn&apos;t found, we suggest you back to home.
        </p>
        <ButtonWrapper asChild size="lg" className="rounded-lg text-base">
          <Link to="/">Back to home page</Link>
        </ButtonWrapper>
      </div>

      {/* Right Section: Illustration */}
      <div className="relative max-h-screen w-full p-2 max-lg:hidden">
        <div className="bg-secondary/50 h-full w-full rounded-2xl"></div>
        <img
          src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lEdXBsaWNhdGUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/7111e35254/CurrencyDuplicate.png"
          alt="404 illustration"
          className="absolute top-1/2 left-1/2 h-32 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
