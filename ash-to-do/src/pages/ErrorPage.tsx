import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} — ${error.statusText}`
    : error instanceof Error
    ? error.message
    : "An unexpected error occurred.";

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 text-center p-8">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-gray-400 max-w-md">{message}</p>
      <button
        className="mt-4 px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition"
        onClick={() => window.location.replace("/")}
      >
        Go back home
      </button>
    </div>
  );
}
