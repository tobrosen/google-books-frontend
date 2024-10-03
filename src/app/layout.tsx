import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Montserrat } from "next/font/google";
import NextAuthProvider from "./providers/NextAuthProvider";
import Nav from "./components/Nav/Nav";

import "./globals.css";
import { authOptions } from "./lib/authOptions";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Vault",
  description: "Search for any books",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthProvider session={session}>
          <Nav />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
