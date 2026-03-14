import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comet | Voice Agent Studio",
  description: "Design, deploy, and monitor high-conversion AI voice agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app-shell">{children}</body>
    </html>
  );
}
