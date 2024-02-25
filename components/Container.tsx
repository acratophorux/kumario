"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";
import MobileMenu from "./mobile_menu";
import cn from "classnames";
import path from "path";

function NavItem({ href, text }: { href: string; text: string }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "font-semibold text-white dark:text-gray-900 bg-black dark:bg-white"
          : "font-normal  text-gray-600 dark:text-gray-400  hover:bg-gray-200 dark:hover:bg-gray-800",
        "hidden md:inline-block m-1 p-1 sm:px-3 sm:py-2 rounded-lg  transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

export default function Container(props: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const children = props.children;
  const pathName = usePathname();
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center px-0">
        <nav className="flex items-center justify-between w-full relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto px-8 pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 z-50 dark:bg-gray-900 dark-text-gray-100">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/dashboard" text="Dashboard" />
            <NavItem href="/notes" text="Notes" />
            <NavItem href="/coursework" text="Coursework" />
            <NavItem href="/snippets" text="Code Snippets" />
            <NavItem href="/reads" text="Reads" />
            <NavItem href="/about" text="Extended About" />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() => {
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
              console.log("clicked");
            }}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
        <main
          id="skip"
          className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
