import SearchForm from "@/components/search/SearchForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        GitHub Organization Explorer
      </h1>
      <p className="text-sm text-gray-500">
        Enter an organization name to browse its public repositories.
      </p>
      <div className="mt-2">
        <SearchForm />
      </div>
    </main>
  );
}
