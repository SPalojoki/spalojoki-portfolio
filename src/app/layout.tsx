import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPalojoki Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
