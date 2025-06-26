import { Outlet } from "@remix-run/react";

export default function Blog() {
  return (
    <div className="prose m-auto max-w-screen-md  py-5">
      <Outlet />
    </div>
  );
}
