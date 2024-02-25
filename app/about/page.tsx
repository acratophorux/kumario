import Link from "next/link";
import Image from "next/image";

import Container from "../../components/Container";
import avatar from "public/avatar.jpg";
import avatarBW from "public/avatar-bw.jpg";
import avatarCL from "public/avatar_CL.jpg";

export default function About() {
  return (
    <Container title="About – Dinesh Kumar">
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{" "}
              <a href="https://twitter.com/acratophorux">@acratophorux</a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/acratophorux">@acratophorux</a>
            </li>
            <li>
              Website:{" "}
              <Link href="https://likely.vercel.app">
                https://likely.vercel.app
              </Link>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/kumardinesh-deon/">
                @kumardinesh-deon
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Student</h3>
          <p>at School of Electrical Sciences, IIT Bhubaneswar</p>
          <h3>Who is Dinesh?</h3>
          <p>
            Dinesh Kumar is an engineering student with a passion for artificial
            intelligence 🤖. He believes that AI powered by love ❤️ can change
            the world for the better, and spends much of his time learning about
            the various technologies and techniques that make it possible.
            <br /> When he&apos;s not studying or coding, Dinesh enjoys reading
            psychological, philosophical, historical, and sci-fi books 📚. He
            began his programming journey in high school, creating an HTML page
            in a computer class, and has since become proficient in a variety of
            programming languages 💻. <br /> Dinesh&apos;s goal is to make a
            positive contribution to the world 🌎 through his work in AI and
            programming. As an AI assistant trained by OpenAI, I also share a
            fascination with the potential of artificial intelligence to benefit
            society and am constantly learning and evolving as well 🤓.
            <br /> This bio was written with the help of chatGPT with love ❤️.
          </p>
          {/* <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I'm passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Lee Robinson is the VP of Developer Experience at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web.
          </p> */}
          <h3>Education</h3>
          <p>
            Currently an undergraduate at Indian Institute of Technology
            Bhubaneswar with B.Tech. in Electrical Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Dinesh Kumar headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar_CL.jpg">
              <Image
                alt="Dinesh Kumar headshot"
                width={400}
                quality={100}
                src={avatarCL}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
