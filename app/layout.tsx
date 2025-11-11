import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPIC — Your nightlife companion",
  description:
    "OPIC automatically gathers all events and offers from the city's clubs and bars in one place.",
  openGraph: {
    title: "OPIC",
    description: "Your nightlife companion",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen text-white" style={{
        background: `linear-gradient(180deg, var(--opic-bg) 0%, var(--opic-bg2) 100%)`
      }}>
        {children}
      </body>
    </html>
  );
}