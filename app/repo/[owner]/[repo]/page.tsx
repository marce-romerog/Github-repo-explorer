import Link from "next/link";
import { getRepo, getContributors } from "@/lib/github";
import { getBookmarks } from "@/lib/bookmarks";
import BookmarkButton from "@/components/repo/BookmarkButton";

type Props = {
  params: Promise<{ owner: string; repo: string }>;
};

export default async function RepoPage({ params }: Props) {
  const { owner, repo } = await params;

  const [repoData, contributors, bookmarks] = await Promise.all([
    getRepo(owner, repo),
    getContributors(owner, repo),
    getBookmarks(),
  ]);

  const top5 = contributors.slice(0, 5);
  const isBookmarked = bookmarks.includes(repoData.full_name);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <nav className="flex items-center gap-1 text-sm text-gray-400">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          ← Search
        </Link>
        <span>›</span>
        <Link href={`/org/${owner}`} className="hover:text-gray-600 transition-colors">
          {owner}
        </Link>
      </nav>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">{repoData.name}</h1>
        <BookmarkButton fullName={repoData.full_name} isBookmarked={isBookmarked} />
      </div>

      {repoData.description && (
        <p className="mt-2 text-gray-500">{repoData.description}</p>
      )}

      <div className="flex gap-6 mt-4 text-sm text-gray-600">
        <span>★ {repoData.stargazers_count.toLocaleString()} stars</span>
        <span>⑂ {repoData.forks_count.toLocaleString()} forks</span>
      </div>

      <section className="mt-10">
        <h2 className="text-base font-semibold tracking-tight mb-4">
          Top Contributors
        </h2>
        {top5.length === 0 ? (
          <p className="text-sm text-gray-400">No contributors found.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {top5.map((contributor) => (
              <li key={contributor.login} className="flex items-center gap-3 py-3">
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  width={32}
                  height={32}
                  className="rounded-full shrink-0"
                />
                <span className="text-sm font-medium">{contributor.login}</span>
                <span className="text-xs text-gray-400 ml-auto tabular-nums">
                  {contributor.contributions.toLocaleString()} commits
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
