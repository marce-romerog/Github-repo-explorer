export type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
};

export type RepoDetail = {
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  owner: { login: string };
};

export type Contributor = {
  login: string;
  avatar_url: string;
  contributions: number;
  html_url: string;
};

function githubError(status: number): Error {
  if (status === 404) return new Error("NOT_FOUND");
  if (status === 403) return new Error("RATE_LIMITED");
  return new Error("API_ERROR");
}

export async function getOrgRepos(org: string): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/orgs/${org}/repos`, {
    next: { revalidate: 300 },
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!res.ok) throw githubError(res.status);

  return res.json();
}

export async function getRepo(owner: string, repo: string): Promise<RepoDetail> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    next: { revalidate: 60 },
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!res.ok) throw githubError(res.status);

  return res.json();
}

export async function getContributors(owner: string, repo: string): Promise<Contributor[]> {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contributors`,
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    }
  );

  if (!res.ok) throw githubError(res.status);

  return res.json();
}
