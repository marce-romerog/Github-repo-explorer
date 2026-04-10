"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function RepoError({ error, reset }: Props) {
  const router = useRouter();
  const retryRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.error(error);
    retryRef.current?.focus();
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
          ? "We couldn't find a repository with that name. It may have been deleted, made private, or the name might be misspelled. Would you like to try searching for another one?"
          : error.message === "RATE_LIMITED"
          ? "GitHub's API rate limit has been reached. Please wait a moment before trying again."
          : "Something went wrong while loading this repository. Please try again."}
      </p>
      <div className="flex gap-3 mt-6">
        <button
          ref={retryRef}
          onClick={reset}
          className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Try again
        </button>
        <button
          onClick={() => router.push("/")}
          className="border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Back to Search
        </button>
      </div>
    </main>
  );
}
