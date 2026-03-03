'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Logic to determine if we are on the home portal page
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Only render Header and Navbar if NOT on the home page */}
        {!isHomePage && <Header />}
        {!isHomePage && <Navbar />}
        
        <main className="flex-grow">
          {children}
        </main>

        {/* Only render Footer if NOT on the home page */}
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}