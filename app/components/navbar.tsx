import { Link } from "@remix-run/react";
import DarkToggle from "./dark-mode";

export default function Navbar() {
  return (
    <div className="flex  py-3  justify-between">
      <ul className="flex items-center gap-3 font-lexend">
        <Link
          className="font-bold tracking-wide font-lexend text-xl cursor-pointer hover:text-teal-400 transition"
          to={"/"}
        >
          marwane.dev
        </Link>
        <li className="size-5">
          <DarkToggle />
        </li>
      </ul>

      <ul className="flex items-center gap-3 font-lexend">
        <Link
          className="hover:underline underline-offset-2 text-stone-600 dark:text-stone-200 hover:dark:text-white hover:text-black"
          to={"/about"}
        >
          About{" "}
        </Link>
      </ul>
    </div>
  );
}
