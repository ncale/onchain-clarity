import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./header";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Onchain Clarity",
  description:
    "Building transparency and accountability with innovative solutions for the future of the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} border-box px-32 pt-8`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
