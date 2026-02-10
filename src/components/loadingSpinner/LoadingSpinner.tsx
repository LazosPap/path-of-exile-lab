/** This is a component loading spinner for the fetching state. */

export function LoadingSpinner() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
      <div
        className="border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"
      />
    </div>
  );
}
