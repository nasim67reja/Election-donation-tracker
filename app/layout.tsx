import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campaign Tracker",
  description:
    "A dedicated platform for election candidates to fund their campaigns and make a lasting impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-[8rem] md:mt-[8.5rem] lg:mt-[9.5rem]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
