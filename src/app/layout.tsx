import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Onchain Clarity",
  description:
    "Bringing higher visibility to blockchain by providing a number of web3 services related to social, governance, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} border-box`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
