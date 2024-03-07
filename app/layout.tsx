import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { AuthProvider } from "./auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Welcome to BlackRobe, your trusted ally in crafting legally binding contracts with the power of AI.",
  metadataBase: new URL("http://localhost:3000"),
};
