"use client";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  return (
    <Suspense fallback={null}>
      <ThemeProvider attribute="class">
        <Container title="Dinesh Kumar">
          <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                  Dinesh Kumar
                </h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                  student at School of Electrical Sciences, <br></br>
                  <span className="font-semibold">
                    Indian Institute of Technology Bhubaneswar
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16">
                  Fiddling with the building blocks of AI. Trying to do my
                  little part in the quest of the Ultimate Question. I am always
                  looking for the spirit of an engineer in a kind heart.
                </p>
              </div>
              <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                  alt="Dinesh Kumar"
                  height={176}
                  width={176}
                  src="/avatar.jpg"
                  sizes="30vw"
                  priority
                  className="rounded-full filter grayscale"
                />
              </div>
            </div>

            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
              Projects
            </h3>
            <div className="flex gap-6 flex-col flex-wrap sm:flex-row">
              <ProjectCard
                title="Handwritten Digit Classification with Convolutional Neural Networks"
                desc="Developed a convolutional neural network in PyTorch to classify
            handwritten digits from 0-9. Designed the model architecture,
            implemented training/evaluation loops, and optimized performance.
            Achieved 98.98% accuracy on Kaggle's digit recognizer
            competition."
                href="gordon"
              />
              <ProjectCard
                title="Gordon Ramsay's AI Sous-Chef"
                desc="Gordon is a conversational AI assistant powered by GPT-3.5 that generates fun and amusing cooking recipes with a corny Ramsay-esque flair. Users can provide ingredients and flavor profiles, and Gordon will whip up creative recipes, garnished with the chef's signature humor."
                href="gordon"
              />
              <ProjectCard
                title="Unleash Your Creativity with Bross"
                desc="Inspired by the imagination of Bob Ross, Bross is an AI image generation tool for bringing your creative visions to life. Simply describe a scene or artistic concept, and Bross will generate a unique image with striking visuals. Whether you seek natural landscapes, abstract designs, or any idea you can dream up, Bross provides an endless canvas to explore."
                href="gordon"
              />
              <ProjectCard
                title="This website is built using Next.js and Tailwind CSS. It is hosted on Vercel."
                desc="Developed a convolutional neural network in PyTorch to classify
            handwritten digits from 0-9. Designed the model architecture,
            implemented training/evaluation loops, and optimized performance.
            Achieved 98.98% accuracy on Kaggle's digit recognizer
            competition."
                href="gordon"
              />
              {/* <BlogPostCard
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              slug="style-guides-component-libraries-design-systems"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Rust Is The Future of JavaScript Infrastructure"
              slug="rust"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Past, Present, and Future of React State Management"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            /> */}
            </div>
            <Link
              href="/blog"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              <>
                {"Explore all projects"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 ml-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </>
            </Link>

            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
              YouTube Collection
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              List of YouTube videos I found interesting.
            </p>
            <VideoCard
              index="01"
              href="https://youtu.be/KuXjwB4LzSA?si=6ASShNZH7B3dd7dd"
              length="23:01"
              title="But what is a convolution? | 3Blue1Brown"
            />
            <VideoCard
              index="02"
              href="https://youtu.be/nmgFG7PUHfo?si=RVm9qpa6_hCn7n-5"
              length="26:33"
              title="The Remarkable Story Behind The Most Important Algorithm Of All Time | Veritasium"
            />
            <VideoCard
              index="03"
              href="https://youtu.be/3JQ3hYko51Y?si=jsynP-_fwf7_GpBU"
              length="2:45"
              title="Neural Network 3D Simulation | Denis Dmitriev"
            />
            <VideoCard
              index="04"
              href="https://youtu.be/HlLCtjJzHVI?si=vWsnWLe1_GJHshqs"
              length="14:23"
              title="Running Apple 1 software on a breadboard computer (Wozmon) | Ben Eater"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
              className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
            >
              Watch all videos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
            <span className="h-16" />

            {/* <Subscribe /> */}
          </div>
        </Container>
      </ThemeProvider>
    </Suspense>
  );
}
