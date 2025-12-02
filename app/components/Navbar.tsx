"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../auth/AuthProvider";

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isAuthRoute =
    pathname?.startsWith("/login") || pathname?.startsWith("/register");

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-500/20 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 emerald-ring">
            <span className="h-4 w-4 rounded-[0.55rem] bg-emerald-400/80 shadow-[0_0_15px_rgba(52,211,153,0.9)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-emerald-300">
              Loki UI
            </span>
            <span className="text-[11px] text-slate-400">
              Reusable dark-mode primitives
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 text-xs md:text-sm">
          <Link
            href="/"
            className={`rounded-full px-3 py-1.5 transition-colors ${
              pathname === "/"
                ? "bg-emerald-500/20 text-emerald-200"
                : "text-slate-300 hover:bg-slate-800/70"
            }`}
          >
            Showcase
          </Link>
          {user && (
            <Link
              href="/library"
              className={`hidden rounded-full px-3 py-1.5 transition-colors md:inline-flex ${
                pathname === "/library"
                  ? "bg-emerald-500/20 text-emerald-200"
                  : "text-slate-300 hover:bg-slate-800/70"
              }`}
            >
              Library
            </Link>
          )}
          <Link
            href="/login"
            className={`hidden rounded-full px-3 py-1.5 text-slate-300 transition-colors hover:bg-slate-800/70 sm:inline-flex ${
              isAuthRoute ? "bg-slate-900/80" : ""
            }`}
          >
            Auth
          </Link>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="hidden max-w-[140px] truncate text-[11px] text-slate-400 sm:inline">
                {user.email}
              </span>
              <button
                onClick={logout}
                className="rounded-full bg-emerald-500/90 px-3 py-1.5 text-[11px] font-medium text-slate-950 shadow-[0_0_18px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full px-3 py-1.5 text-[11px] font-medium text-slate-200 transition hover:bg-slate-800/70"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="hidden rounded-full bg-emerald-500/90 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-[0_0_18px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400 sm:inline-flex"
              >
                Get access
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}


