import Balancer from "react-wrap-balancer";
import { Github, Twitter } from "@/components/shared/icons";
import Logo from "./logo";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/evmchess"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing ChessFish
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-white  bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Play Chess on the Blockchain</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-100 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            {" "}
            Welcome to the Chess{" "}
            <span className="italic text-cyan-400">Revolution</span>
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-slate-800 hover:text-white"
            href="https://docs.chess.fish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Read the Docs</p>
          </a>

          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/Chess-Fish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on </span> GitHub{" "}
            </p>
          </a>
        </div>

        <div className="my-10 grid h-auto w-full max-w-screen-xl animate-fade-up">
         
        </div>
      </div>
    </>
  );
}

