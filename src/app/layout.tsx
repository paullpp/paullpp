import { GeistSans } from "geist/font/sans";
import "~/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Paul Lipp",
  description: "Paul Lipp Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`flex min-h-screen flex-col font-sans bg-black ${GeistSans.variable}`}>
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
