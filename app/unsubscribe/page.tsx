import Link from "next/link";

type Status = "ok" | "invalid" | "error";

const COPY: Record<Status, { title: string; body: string }> = {
  ok: {
    title: "You’re unsubscribed.",
    body: "No more JobPing emails. If this was a mistake, just sign up again.",
  },
  invalid: {
    title: "This link isn’t valid.",
    body: "The token is expired or wrong. You can sign up again from the homepage.",
  },
  error: {
    title: "Something went wrong.",
    body: "Try the link again in a minute. If it still fails, just let the next email go to spam.",
  },
};

export default async function UnsubscribePage(props: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await props.searchParams;
  const raw = params?.status;
  const status: Status =
    raw === "invalid" || raw === "error" ? raw : "ok";
  const { title, body } = COPY[status];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-md flex-col gap-6 px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-neutral-400">{body}</p>
        <Link
          href="/"
          className="mx-auto mt-2 text-sm text-neutral-500 underline underline-offset-4 hover:text-white"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
