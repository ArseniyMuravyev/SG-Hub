import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import { Layout } from "@/components/layout/Layout";
import { roboto_flex } from "./fonts";

export const metadata: Metadata = {
  title: "SG Hub",
  description: "Social Network for Personal Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_flex.className} bg-black`}>
        <NextAuthProvider>
          <Layout>
            {children}
            <div id="modals" />
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
