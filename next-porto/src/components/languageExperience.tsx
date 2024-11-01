import C from "../../public/c.png";
import Css from "../../public/css.png";
import Html from "../../public/html.png";
import Javascript from "../../public/javascript.png";
import Python from "../../public/python.png";
import Java from "../../public/java.png";
import Git from "../../public/Git-logo.svg.png";
import ReactLogo from "../../public/React-icon.svg.png";
import Tailwind from "../../public/Tailwind_CSS_Logo.svg.png";
import Typescript from "../../public/Typescript_logo_2020.svg.png";
import Nodejs from "../../public/nodejs.png";
import Github from "../../public/github.png";
import Image from "next/image";

export default function Experience() {
  const logos = [
    C, Css, Html, Javascript, Python, Java,
    Nodejs, ReactLogo, Tailwind, Typescript, Git, Github
  ];

  return (
    <div className="relative dark:bg-donker">
      <h1 className="text-center text-3xl mb-5 font-bold dark:text-white">Tools and Experience</h1>
      <div className="py-5 overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap hover:pause transition ease-linear">
          {Array.from({ length: 5 }).flatMap((_, index) =>
            logos.map((logo, idx) => (
              <Image key={`${index}-${idx}`} src={logo} alt="Tech logo" className="h-14 hover:scale-[1.2] hover:cursor-pointer transition ease-linear bg-slate-300 dark:bg-white px-10 py-2 rounded-full"/>
            ))
          )}
        </div>
      </div>
    </div>
  );
}