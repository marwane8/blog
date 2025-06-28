import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Marwane" },
    { name: "description", content: "Marwane's Dev Blog" },
  ];
};

export default function Blog() {
  return (
    <div className="prose m-auto max-w-screen-md  py-5">
      <Outlet />
    </div>
  );
}
