import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import Footer from "@/components/footer";

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
      <body className={`${font.variable} border-box relative pt-8 font-main`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
