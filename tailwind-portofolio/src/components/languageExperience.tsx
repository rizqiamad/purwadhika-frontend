import C from "../assets/c.png";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Javascript from "../assets/javascript.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";
import Git from "../assets/Git-logo.svg.png";
import ReactLogo from "../assets/React-icon.svg.png";
import Tailwind from "../assets/Tailwind_CSS_Logo.svg.png";
import Typescript from "../assets/Typescript_logo_2020.svg.png";
import Nodejs from "../assets/nodejs.png";
import Github from "../assets/github.png";

export default function Experience() {
  const logos = [
    C, Css, Html, Javascript, Python, Java,
    Nodejs, ReactLogo, Tailwind, Typescript, Git, Github
  ];

  return (
    <div className="relative">
      <h1 className="text-center text-3xl mb-5 font-bold dark:text-white">Tools and Experience</h1>
      <div className="py-5 overflow-hidden after:content-[' '] after:carousel-padding after:padding-after before:content-[' '] before:carousel-padding before:padding-before">
        <div className="flex gap-16 animate-scroll whitespace-nowrap hover:pause transition ease-linear">
          {Array.from({ length: 3 }).flatMap((_, index) =>
            logos.map((logo, idx) => (
              <img key={`${index}-${idx}`} src={logo} alt="Tech logo" className="h-14 hover:scale-[1.2] hover:cursor-pointer transition ease-linear bg-slate-300 dark:bg-white px-10 py-2 rounded-full" />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
