"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function RepoError({ error, reset }: Props) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-xl font-semibold text-red-600">
        {error.message === "NOT_FOUND"
          ? "Repository not found"
          : error.message === "RATE_LIMITED"
          ? "GitHub API rate limit exceeded"
          : "Something went wrong"}
      </h1>
      <p className="mt-2 text-gray-500">
        {error.message === "NOT_FOUND"
          ? "This repository doesn't exist. It may have been deleted or made private."
          : error.message === "RATE_LIMITED"
          ? "Too many requests to the GitHub API. Please wait a moment and try again."
          : "Unable to load this repository. The GitHub API may be unavailable."}
      </p>
      <div className="flex gap-3 mt-6">
        <button
          onClick={reset}
          className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
        >
          Try again
        </button>
        <button
          onClick={() => router.push("/")}
          className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-50"
        >
          Back to Search
        </button>
      </div>
    </main>
  );
}
