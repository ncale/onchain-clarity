import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const font = Roboto({ subsets: ["latin"], weight: ["100", "400"] });

export const metadata: Metadata = {
  title: "Onchain Clarity",
  description: "Bringing higher visibility to blockchain by providing a number of web3 services related to social, governance, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${font.className} border-box`}>
        <Providers>
          <Header />
					<div className="flex">
						<Sidebar />
						{children}
					</div>
					<Footer />
        </Providers>
      </body>
    </html>
  );
}
