import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nocta — Your nightlife companion",
  description:
    "Nocta automatically gathers all events and offers from the city's clubs and bars in one place.",
  openGraph: {
    title: "Nocta",
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
        background: `linear-gradient(180deg, var(--nocta-bg) 0%, var(--nocta-bg2) 100%)`
      }}>
        {children}
      </body>
    </html>
  );
}