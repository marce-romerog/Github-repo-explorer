"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const org = value.trim();
    if (!org) return;
    router.push(`/org/${org}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. vercel"
        className="border border-gray-300 rounded px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button
        type="submit"
        className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700"
      >
        Search
      </button>
    </form>
  );
}
