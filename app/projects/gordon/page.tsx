"use client";
import Container from "@/components/Container";
import { ThemeProvider } from "next-themes";
import { useChat } from "ai/react";
import Image from "next/image";
export default function Gordon() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

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
          <form
            className="fixed bottom-0 w-full max-w-sm sm:max-w-md md:max-w-3xl h-12  mb-3 p-1 flex flex-row text-black dark:text-white ring-2 ring-gray-600 dark:ring-gray-200 rounded-full backdrop-blur-lg"
            onSubmit={handleSubmit}
          >
            {/* input form for ingredients with generate button */}

            <input
              type="text"
              className="w-full h-full rounded-full px-4 bg-gray-200 dark:bg-gray-600"
              value={input}
              placeholder="Enter ingredients"
              onChange={handleInputChange}
            />
            <button className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full px-4 ml-3">
              Generate
            </button>
          </form>
          {/* div for showing api response */}
          <div className="">
            <Image
              src="/chef_1.png"
              alt="Gordon Ramsay"
              width={160}
              height={80}
              className="rounded-full shadow-xl"
            />
          </div>
          <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch text-black dark:text-white">
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "Gordon: "}
                {m.content}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
