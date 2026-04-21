"use client";

import { useState, type FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; email: string }
  | { kind: "error"; message: string };

export default function SignupForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [email, setEmail] = useState("");
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !file) return;

    setStatus({ kind: "submitting" });
    const data = new FormData();
    data.append("email", email);
    data.append("resume", file);

    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        body: data,
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        const message =
          typeof body?.detail === "string"
            ? body.detail
            : "Something went wrong. Try again.";
        setStatus({ kind: "error", message });
        return;
      }
      setStatus({ kind: "success", email });
    } catch {
      setStatus({
        kind: "error",
        message: "Couldn't reach the server. Check your connection and try again.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 text-center">
        <p className="text-lg text-white">You&apos;re in.</p>
        <p className="mt-2 text-sm text-neutral-400">
          Check <span className="text-neutral-200">{status.email}</span> for a
          confirmation. Your first digest arrives tomorrow at 9am Central.
        </p>
      </div>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-600 focus:border-neutral-500 focus:outline-none"
        disabled={submitting}
      />
      <label className="flex cursor-pointer items-center justify-between rounded-md border border-dashed border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-400 hover:border-neutral-600">
        <span className="truncate">
          {file ? file.name : "Upload resume (PDF)"}
        </span>
        <span className="text-xs text-neutral-500">Choose file</span>
        <input
          type="file"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="hidden"
          disabled={submitting}
        />
      </label>
      <button
        type="submit"
        disabled={submitting || !email || !file}
        className="rounded-md bg-white px-4 py-3 font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-400"
      >
        {submitting ? "Sending…" : "Get daily matches"}
      </button>
      {status.kind === "error" && (
        <p className="text-sm text-red-400">{status.message}</p>
      )}
      <p className="text-center text-xs text-neutral-500">
        No account. No spam. Unsubscribe in one click.
      </p>
    </form>
  );
}
