import SignupForm from "@/components/SignupForm";

const STEPS = [
  {
    n: "1",
    title: "Drop your resume (once)",
    body: "PDF upload. We use it to match jobs — nothing else.",
  },
  {
    n: "2",
    title: "We check Indeed nightly",
    body: "Fresh Austin-area software openings, every morning.",
  },
  {
    n: "3",
    title: "Five picks at 9am Central",
    body: "Claude reads your resume and picks the 5 best fits — one line of why for each.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-xl flex-col gap-16 px-6 py-20 sm:py-28">
        <header className="flex flex-col gap-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            JobPing
          </h1>
          <p className="text-lg text-neutral-400">
            Five jobs in your inbox every morning. Picked by Claude, not a keyword filter.
          </p>
        </header>

        <section className="flex flex-col gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-sm text-neutral-400">
                {s.n}
              </div>
              <div>
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        <SignupForm />

        <footer className="flex flex-col items-center gap-2 text-xs text-neutral-600">
          <div>Austin, TX + remote · Free while in beta</div>
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
