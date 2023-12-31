import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import ClientWrapper from "./clientWrapper";

export const metadata = {
  title: "Chess.fish - Chess on the blockchain",
  description:
    "Chess.fish is the leading platform for playing chess on the blockchain. Dive into the fusion of classic strategy with modern blockchain technology and smart contracts. Play chess, earn crypto rewards, and hone your skills in the exciting intersection of chess and cryptocurrency.",

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
      <head>
        <style dangerouslySetInnerHTML={{ 
            __html: `
            body {
              background: linear-gradient(to right, slate-900, green-800, slate-800), black; /* Overlay the gradient on a black background */
              min-height: 100vh; /* Adjust based on your requirements */
              /* Other styles */
            }
            .background-animate {
              background-size: 400%;
              -webkit-animation: AnimationName 10s ease infinite;
              -moz-animation: AnimationName 10s ease infinite;
              animation: AnimationName 10s ease infinite;
            }
            @keyframes AnimationName {
              0%, 100% {
                background-position: 0% 0%;
              }
              50% {
                background-position: 100% 100%;
              }
            }
            ` 
        }} />
      </head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <ClientWrapper> {/* Wrap content with ClientWrapper */}
          <div className="fixed h-screen w-full bg-gradient-to-r from-slate-900 via-green-800 to-slate-800 background-animate" />
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ClientWrapper> {/* Closing tag for ClientWrapper */}
      </body>
    </html>
  );
}


