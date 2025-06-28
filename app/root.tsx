import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import "./tailwind.css";
import { DarkModeContext } from "./components/dark-mode";
import { useState } from "react";
import { cn } from "./js.util";
import Navbar from "./components/navbar";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Marwane" },
    { name: "description", content: "Marwane's Dev Blog" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Meta />
        <Links />
      </head>

      <DarkModeContext.Provider
        value={{ darkMode: darkMode, setDarkMode: setDarkMode }}
      >
        <body className={cn(darkMode ? "dark base" : "")}>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </DarkModeContext.Provider>
    </html>
  );
}

export default function App() {
  return (
    <div className="min-h-[100dvh] base transition flex flex-col">
      <div className="container mx-auto px-3 max-w-screen-xl pb-20">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export function ErrorBoundary() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  return (
    <div className="min-h-[100dvh] base transition flex flex-col font-lexend">
      <div className="flex h-fit flex-col rounded-2xl  p-12 translate-y-16">
        <h1 className="pb-4 text-center text-2xl font-semibold">
          <div className="text-8xl font-bold text-secondary text-teal-500">
            {error.status}{" "}
          </div>{" "}
          <div className="text-4xl font-semibold">{error.statusText}</div>
        </h1>
        <h1 className=" text-center text-xl font-semibold">
          {error.status == 404
            ? "The page you are looking for is floating in deep space."
            : "Sorry, something went wrong"}
        </h1>

        <h2 className="text-center">
          Return{" "}
          <Link to={"/"} className="link">
            home
          </Link>{" "}
          and try again.{" "}
        </h2>
      </div>
    </div>
  );
}
