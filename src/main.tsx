import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NotFound } from "@/components/errors";
import { queryClient } from "@/lib/queryClient";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter(
  {
    routeTree,
    defaultNotFoundComponent: NotFound,
    /** Return you on the scroll position you where before on the previous. */
    scrollRestoration: true,
    // defaultErrorComponent: ({ error }) => {
    //   /**
    //    * Handle the 500 error to render the internalError on the component.
    //    */
    //   const err = error as ApiError;
    //   if (err?.status === 500) return <InternalError />;
  },
  // context: {
  //   auth: undefined!,
  // },
);

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  return <RouterProvider router={router} />;
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  );
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
