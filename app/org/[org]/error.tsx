"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
        Organization not found
      </h1>
      <p className="mt-2 text-gray-500">
        We couldn&apos;t load repositories for this organization. It may not
        exist or the GitHub API may be unavailable.
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Try again
      </button>
    </main>
  );
}
