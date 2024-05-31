import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LightProvider } from "@/context/LightContext";
import { DoorProvider } from "@/context/DoorContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DoorProvider>
        <LightProvider>
          <body className={inter.className}>{children}</body>
        </LightProvider>
      </DoorProvider>
    </html>
  );
}
