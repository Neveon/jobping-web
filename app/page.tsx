export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-xl flex-col gap-12 px-6 py-20 sm:py-28">
        <header className="flex flex-col gap-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            JobPing
          </h1>
          <div className="inline-flex justify-center">
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase tracking-wider text-neutral-400">
              Archived
            </span>
          </div>
        </header>

        <section className="flex flex-col gap-4 text-center">
          <p className="text-lg text-neutral-300">
            JobPing is no longer accepting sign-ups.
          </p>
          <p className="text-sm text-neutral-400">
            The daily digest service has been retired. Thanks to everyone who tried it —
            your support meant a lot.
          </p>
          <p className="text-sm text-neutral-500">
            Existing subscribers will no longer receive emails. No further action is needed.
          </p>
        </section>

        <footer className="flex flex-col items-center gap-2 text-xs text-neutral-600">
          <div>Built in Austin, TX</div>
          <div className="flex gap-3">
            <a
              href="https://github.com/Neveon/jobping-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400"
            >
              Web source
            </a>
            <span>·</span>
            <a
              href="https://github.com/Neveon/jobping-api"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400"
            >
              API source
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
