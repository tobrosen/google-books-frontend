import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Nav from "./components/Nav/Nav";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Vault",
  description: "Search for any books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
