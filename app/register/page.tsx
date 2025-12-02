"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth/AuthProvider";

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register(email, password);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 rounded-2xl border border-emerald-500/30 bg-slate-950/80 p-6 shadow-[0_0_32px_rgba(8,47,73,0.9)]">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold text-slate-50">
          Create your Loki UI account
        </h1>
        <p className="text-sm text-slate-400">
          Save component presets, export snippets and sync your design tokens
          across projects.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-emerald-500/35 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
            placeholder="you@studio.dev"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-xs font-medium text-slate-200"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-emerald-500/35 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/70"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="text-xs text-emerald-300/90">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_26px_rgba(16,185,129,0.8)] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="text-xs text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-emerald-300 hover:text-emerald-200"
        >
          Log in
        </Link>
        .
      </p>
    </div>
  );
}


