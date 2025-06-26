import type { MetaFunction } from "@remix-run/node";
import Post from "~/components/post";
import { getPosts } from "~/js.util";

export const meta: MetaFunction = () => {
  return [
    { title: "Marwane Taroua" },
    { name: "description", content: "Marwane's Dev Blog" },
  ];
};

export default function App() {
  const posts = getPosts();
  const featured = posts.filter((post) => post.meta?.featured);

  return (
    <div>
      <div className="py-7 space-y-9">
        {featured.map((post) => (
          <Post key={post.id} slug={post.id} meta={post.meta} />
        ))}
      </div>
    </div>
  );
}
