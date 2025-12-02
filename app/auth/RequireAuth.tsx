"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "./AuthProvider";

type RequireAuthProps = {
  children: ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      const search = pathname ? `?next=${encodeURIComponent(pathname)}` : "";
      router.replace(`/login${search}`);
    }
  }, [user, loading, router, pathname]);

  if (loading || !user) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-sm text-slate-300">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-slate-950/70 px-4 py-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Checking your access…
        </div>
      </div>
    );
  }

  return <>{children}</>;
}


