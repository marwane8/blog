import { Link } from "@remix-run/react";
import { Frontmatter } from "~/js.util";

export default function Post({
  slug,
  meta,
}: {
  slug: string;
  meta: Frontmatter;
}) {
  return (
    <div className="max-w-xl m-auto space-y-1">
      <Link
        className="title hover:underline underline-offset-4  decoration-dotted"
        to={slug}
      >
        {meta.title}
      </Link>
      <p className="font-cal text-xl md:text-2xl tracking-wide py-1">
        {meta.summary}
      </p>
    </div>
  );
}
