import type { Metadata } from "next";
import { Major_Mono_Display, Golos_Text } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import Footer from "@/components/footer";

const font = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-main",
});
const font_title = Major_Mono_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-title",
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
        className={`${font.variable} ${font_title.variable} border-box relative font-main`}
      >
        <div className="relative mx-auto max-w-[1360px]">
          <Lines />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Lines = () => (
  <>
    <div className="absolute left-0 top-0 z-[100] mx-8 hidden h-full border-x border-gray-400 md:block" />
    <div className="absolute right-0 top-0 z-[100] mx-8 hidden h-full border-x border-gray-400 md:block" />
  </>
);
