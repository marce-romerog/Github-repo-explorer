"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const COOKIE_NAME = "bookmarks";

export async function getBookmarks(): Promise<string[]> {
  const store = await cookies();
  const raw = store.get(COOKIE_NAME)?.value;
  if (!raw) return [];
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export async function toggleBookmark(fullName: string): Promise<void> {
  const store = await cookies();
  const current = await getBookmarks();

  const next = current.includes(fullName)
    ? current.filter((b) => b !== fullName)
    : [...current, fullName];

  store.set(COOKIE_NAME, JSON.stringify(next), {
    path: "/",
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

  const [owner, repo] = fullName.split("/");
  revalidatePath(`/repo/${owner}/${repo}`);
}
