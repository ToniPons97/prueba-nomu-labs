import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Metadata } from "next";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DialogueDroid | Home",
  description: "Created by Antonio Pons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
