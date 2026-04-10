"use client";

import { useTransition } from "react";
import { toggleBookmark } from "@/lib/bookmarks";

type Props = {
  fullName: string;
  isBookmarked: boolean;
};

export default function BookmarkButton({ fullName, isBookmarked }: Props) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await toggleBookmark(fullName);
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="mt-4 flex items-center gap-2 text-sm border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 disabled:opacity-50"
    >
      <span>{isBookmarked ? "★" : "☆"}</span>
      <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
    </button>
  );
}
