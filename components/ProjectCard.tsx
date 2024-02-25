import Image from "next/image";

import Link from "next/link";
// import useSWR from "swr";
import cn from "classnames";

// import fetcher from "lib/fetcher";
// import { Views } from "lib/types";

export default function ProjectCard({ title, href, gradient, desc }: any) {
  //   const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  //   const views = data?.total;

  return (
    <Link
      href={`/projects/${href}`}
      className={cn(
        "transform hover:scale-[1.01] ease-in duration-300 transition-all",
        "rounded-xl w-full sm:w-[48%] bg-gradient-to-r p-1",
        gradient
      )}
    >
      <div className="flex flex-col gap-2 h-full bg-white dark:bg-gray-800 rounded-lg ring-2 ring-white dark:ring-gray-800 p-4">
        <div className="flex flex-col gap-3">
          <div className="relative w-full h-40 rounded-lg overflow-hidden flex justify-center items-center">
            <Image
              src="/chef_1.png"
              alt={title}
              className="rounded-lg"
              width={640}
              height={320}
            />
          </div>
          <h4 className="text-lg md:text-lg font-medium  w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
          <p className="text-gray-800 dark:text-gray-200">{desc}</p>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// export default function ProjectCard({ title, description, image }: any) {
//   // create a project card where I can show my projects' name, description and an image to go along with it
//   // create a cool hover effect on the card
//   return <></>;
// }
