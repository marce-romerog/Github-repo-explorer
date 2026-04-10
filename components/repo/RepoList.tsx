import Link from "next/link";
import type { Repo } from "@/lib/github";

function fmt(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export default function RepoList({ repos }: { repos: Repo[] }) {
  if (repos.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-gray-400">
        This organization has no public repositories.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-100">
      {repos.map((repo) => {
        const [owner] = repo.full_name.split("/");
        return (
          <li key={repo.id} className="py-4 group">
            <Link
              href={`/repo/${owner}/${repo.name}`}
              className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors"
            >
              {repo.name}
            </Link>
            {repo.description && (
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {repo.description}
              </p>
            )}
            <div className="flex gap-4 mt-2 text-xs text-gray-400">
              <span>★ {fmt(repo.stargazers_count)}</span>
              <span>⑂ {fmt(repo.forks_count)}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
