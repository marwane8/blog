import { Outlet } from "@remix-run/react";

export default function Blog() {
  return (
    <div className="prose p-10 dbug">
      <Outlet />
    </div>
  );
}
