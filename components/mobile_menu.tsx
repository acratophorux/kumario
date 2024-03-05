import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "../components/hooks/useDelayedRender";
import { useState, useEffect } from "react";
import styles from "app/mobile_menu.module.css";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-gray-100 bg-opacity-80 backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-80",
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform hover:scale-[1.01] transition-all"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/" className="flex w-auto pb-4">
              Home
            </Link>
          </li>
          {/* transition duration-150 ease-in-out text-gray-700 hover:bg-gray-100
          hover:text-gray-900 */}
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform transition-all hover:scale-[1.01]"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/dashboard" className="flex w-auto pb-4">
              Dashboard
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform hover:scale-[1.01] transition-all"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/notes" className="flex w-auto pb-4">
              Notes
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform hover:scale-[1.01] transition-all"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/coursework" className="flex w-auto pb-4">
              Coursework
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform hover:scale-[1.01] transition-all"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/snippets" className="flex w-auto pb-4">
              Code Snippets
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform hover:scale-[1.01] transition-all"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/reads" className="flex w-auto pb-4">
              Reads
            </Link>
          </li>
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold transform hover:scale-[1.01] transition-all"
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/about" className="flex w-auto pb-4">
              Extended About
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
