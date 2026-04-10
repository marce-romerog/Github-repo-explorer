import Link from "next/link";
import { getOrgRepos } from "@/lib/github";
import RepoList from "@/components/repo/RepoList";

type Props = {
  params: Promise<{ org: string }>;
};

export default async function OrgPage({ params }: Props) {
  const { org } = await params;
  const repos = await getOrgRepos(org);

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <Link
        href="/"
        className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
      >
        ← Search
      </Link>

      <h1 className="mt-4 text-xl font-semibold tracking-tight">
        {org}
        <span className="ml-2 text-sm font-normal text-gray-400">
          {repos.length} {repos.length === 1 ? "repository" : "repositories"}
        </span>
      </h1>

      <div className="mt-6">
        <RepoList repos={repos} />
      </div>
    </main>
  );
}
