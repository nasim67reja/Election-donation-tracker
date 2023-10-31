import type { Metadata } from "next";

// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AOSComponent from "@/components/common/Aos";
import { raleway } from "./fonts";

// const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={raleway.className}>
      <body>
        <AOSComponent>
          <Navbar />
          <div className="mt-[7.5rem] md:mt-[7.3rem] lg:mt-[8rem]">
            {children}
          </div>
          <Footer />
        </AOSComponent>
      </body>
    </html>
  );
}
