// git push --set-upstream kode-akademi master

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Config } from "@/common/config";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: Config.description,
  keywords: Config.keyword,
  creator: Config.creator,
  metadataBase: new URL('https://localhost:3000'),
  authors: {
    name: Config.creator,
    url: Config.openGraph.url,
  },
  openGraph: {
    images: Config.profile,
    url: Config.openGraph.url,
    siteName: Config.openGraph.siteName,
    locale: Config.openGraph.locale,
    type: 'website',
  },
  icons: {
    icon: Config.icons.icon,
    shortcut: Config.icons.shortcut,
    apple: Config.icons.apple,
    other: {
      rel: Config.icons.other.rel,
      url: Config.icons.other.url,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <div className="fixed bottom-4 right-4 p-4 bg-white shadow-xl rounded-md border">
          <p>This is demo web by fiqtor | <a href="https://fiqtor.xyz" className="text-blue-400 hover:opacity-70">Portfolio Developer</a></p>
        </div> */}
      </body>
    </html>
  );
}
