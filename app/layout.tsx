import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Chess.fish - Chess on the blockchain",
  description:
    "Chess.fish is an innovative platform that combines the strategic depth of chess with the exciting world of blockchain and smart contracts. Play chess on the blockchain for crypto, sharpen your skills, and earn rewards.",

  twitter: {
    card: "summary_large_image",
    title: "Chess.fish - Chess on the blockchain",
    description:
      "Join Chess.fish, the pioneering blockchain protocol where you can earn crytpocurrency by playing chess against others. Experience the fusion of chess strategy and blockchain technology.",
    creator: "@Alexander John Lee",
  },
  metadataBase: new URL("https://chess.fish"),
  themeColor: "#FFF",
};
// <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-pink-100" />
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-gray-700 to-green-800" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
