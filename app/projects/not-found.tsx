import Link from "next/link";

import Container from "../../components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Dinesh Kumar">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 Error: Page Abducted by Rouge Clowns under projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Welcome to the 404 error page of madness! It seems that the page you
          were trying to reach has been abducted by a group of rogue clowns from
          the planet Zog. Don&apos;t panic, though! We have a team of highly
          trained llama-ninjas on the case and they will track down the page and
          bring it back safely. In the meantime, we recommend that you take a
          break and watch some cat videos on YouTube or perhaps engage in a
          heated game of virtual rock-paper-scissors. Remember, the power of
          laughter is strong, and we have plenty of it here on this absurd error
          page. Hang in there!
        </p>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
