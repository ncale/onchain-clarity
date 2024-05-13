import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./header";

const font = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-main",
});

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
      <body
        className={`${font.variable} border-box max-w-[960px] mx-auto px-32 pt-8 font-main`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
