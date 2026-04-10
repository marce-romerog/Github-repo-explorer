export default function RepoLoading() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      {/* Mirrors: <h1> repo name */}
      <div className="h-8 w-56 bg-gray-200 rounded animate-pulse" />

      {/* Mirrors: description */}
      <div className="h-4 w-96 bg-gray-100 rounded animate-pulse mt-3" />

      {/* Mirrors: stars / forks row */}
      <div className="flex gap-6 mt-4">
        <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
      </div>

      {/* Mirrors: Top Contributors section */}
      <section className="mt-10">
        <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-4" />
        <ul className="divide-y divide-gray-100">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-center gap-3 py-3">
              {/* Mirrors: avatar */}
              <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse shrink-0" />
              {/* Mirrors: username */}
              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
              {/* Mirrors: commit count (ml-auto) */}
              <div className="h-3 w-16 bg-gray-100 rounded animate-pulse ml-auto" />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
