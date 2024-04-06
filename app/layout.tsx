import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/providers/TanStackProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Address Book",
  description: "Adress Book Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster />
      </body>
    </html>
  );
}
