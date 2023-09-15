import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar, Footer } from "@/components";
import { AOSInit } from "@/components/aos";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Dobre Precle",
  description: "DOBRE PRECLE - PRECLE DOBRE Z NATURY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <AOSInit />
      <link rel='icon' href='/marker_2.svg' sizes='any' />
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
