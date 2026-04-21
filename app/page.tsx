import SignupForm from "@/components/SignupForm";

const STEPS = [
  {
    n: "1",
    title: "Drop your resume",
    body: "Upload a PDF once. We keep it only to match you against jobs.",
  },
  {
    n: "2",
    title: "We scan every morning",
    body: "Fresh roles from top Austin companies — ranked by Levels.fyi compensation.",
  },
  {
    n: "3",
    title: "Five picks at 9am",
    body: "Claude picks your 5 best fits and writes a one-line reason for each.",
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
            Daily job matches, delivered by email — picked by Claude, not keywords.
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

        <footer className="text-center text-xs text-neutral-600">
          Austin, TX + remote roles. Free while in beta.
        </footer>
      </div>
    </main>
  );
}
