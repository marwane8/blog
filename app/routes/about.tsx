import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import pfp from "app/assets/pfp.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Marwane" },
    { name: "description", content: "Marwane's Dev Blog" },
  ];
};

export default function About() {
  const githubLink = "https://github.com/marwane8";
  const linkedinLink = "https://www.linkedin.com/in/marwanetaroua";
  return (
    <div>
      <div className="my-14">
        <ProfilePic />
      </div>
      <div className="words space-y-5">
        <p>
          <span className="font-lexend font-bold text-3xl md:text-4xl ">
            I&apos;m Marwane Taroua,{" "}
          </span>{" "}
          a software engineer based out of New York City. I started my software
          journey back in 2020 when I was an areospace engineer at a leading jet
          engine company. At that time I quickly learned that understanding
          computers was a magical skill that can help you do things orders of
          magnitude faster if you can think about the problem in the right way.
          I have been hooked on trying to solve this puzzle ever since.
        </p>
        <p>
          I started with learning the basics of C and Python, and built many
          cool scripts to automate my day to day tasks. I now spend my days in
          the fintech space balancing between building cool tools on top of
          large datasets and optimizing really slow processes (and there are
          lots of them!).
        </p>
        <p>
          You can find out more about my work expierience on my{" "}
          <Link className="link" to={linkedinLink}>
            linkedin
          </Link>{" "}
          page, and check out some of my side projects on{" "}
          <Link className="link" to={githubLink}>
            {" "}
            github
          </Link>
          . Thanks for stoping by!
        </p>
      </div>
    </div>
  );
}
function ProfilePic() {
  return (
    <div className="size-60 rounded-full overflow-hidden border-4 border-stone-800 dark:border-stone-50 mx-auto">
      <img src={pfp} alt="The Author Marwane Taroua" />
    </div>
  );
}
