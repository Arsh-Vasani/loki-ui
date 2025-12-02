import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./auth/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loki UI – Reusable React primitives for dark dashboards",
  description:
    "Loki UI is a collection of reusable, composable UI components for modern dark dashboards, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <AuthProvider>
          <div className="min-h-screen bg-slate-950">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-28 md:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
