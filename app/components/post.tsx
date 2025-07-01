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
    <div className="max-w-xl m-auto space-y-3">
      <Link
        className="title hover:underline underline-offset-4  decoration-dotted"
        to={slug}
      >
        {meta.title}
      </Link>
      <p className="words">{meta.summary}</p>
    </div>
  );
}
