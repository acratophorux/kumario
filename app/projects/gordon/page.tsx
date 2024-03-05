"use client";
import Container from "@/components/Container";
import Chat from "@/app/assistant";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

export default function Gordon() {
  return (
    <ThemeProvider attribute="class">
      <Container title="AI Chef | Your Recipe Generator">
        <div className="flex flex-col justify-center items-center max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Gordon&apos;s AI Sous-Chef
          </h3>
          {/* description */}
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Gordon is a conversational AI assistant powered by GPT-3.5 that
            generates fun and amusing cooking recipes with a corny flair. Users
            can provide ingredients and flavor profiles, and Gordon will whip up
            creative recipes, garnished with the chef&apos;s signature humor.
          </p>
          <div className="">
            <Image
              id="myImage"
              src="/chef_1.png"
              alt="Gordon Ramsay"
              width={160}
              height={80}
              className="rounded-full shadow-xl"
            />
          </div>
          <Chat />
        </div>
      </Container>
    </ThemeProvider>
  );
}
