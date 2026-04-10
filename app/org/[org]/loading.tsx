export default function OrgLoading() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      {/* Mirrors: <h1> Repositories for {org} */}
      <div className="h-7 w-64 bg-gray-200 rounded animate-pulse mb-6" />

      <ul className="divide-y divide-gray-100">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i} className="py-4">
            {/* Mirrors: repo name link */}
            <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
            {/* Mirrors: description */}
            <div className="h-3 w-80 bg-gray-100 rounded animate-pulse mt-2" />
            {/* Mirrors: stars / forks row */}
            <div className="flex gap-4 mt-2">
              <div className="h-3 w-12 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-12 bg-gray-100 rounded animate-pulse" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
