"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchForm from "@/components/search/SearchForm";

type Props = {
  error: Error & { digest?: string };
};

export default function OrgError({ error }: Props) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-xl font-semibold text-red-600">
        {error.message === "NOT_FOUND"
          ? "Organization not found"
          : error.message === "RATE_LIMITED"
          ? "GitHub API rate limit exceeded"
          : "Something went wrong"}
      </h1>
      <p className="mt-2 text-gray-500">
        {error.message === "NOT_FOUND"
          ? "This organization doesn't exist on GitHub. Check for typos and try again."
          : error.message === "RATE_LIMITED"
          ? "Too many requests to the GitHub API. Please wait a moment and try again."
          : "Unable to load repositories. The GitHub API may be unavailable."}
      </p>

      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-2">
          Search for a different organization:
        </p>
        <SearchForm />
      </div>

      <button
        onClick={() => router.push("/")}
        className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
      >
        ← Back to Search
      </button>
    </main>
  );
}
