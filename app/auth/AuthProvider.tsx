"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  email: string;
};

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "loki-ui-auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as User;
        setUser(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const persistUser = (nextUser: User | null) => {
    if (typeof window === "undefined") return;
    if (nextUser) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Please provide an email and password.");
    }
    const nextUser: User = { email };
    setUser(nextUser);
    persistUser(nextUser);
  };

  const register = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Please provide an email and password.");
    }
    const nextUser: User = { email };
    setUser(nextUser);
    persistUser(nextUser);
  };

  const logout = () => {
    setUser(null);
    persistUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}


