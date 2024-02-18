import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Welcome to BlackRobe, your trusted ally in crafting legally binding contracts with the power of AI.",
};
