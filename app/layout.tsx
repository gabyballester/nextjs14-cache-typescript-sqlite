import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Caching",
  description: "Tech Assessment to show up caching in Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
