import DailyProverb from "~/components/daily-proverb";
import Post from "~/components/post";
import { getPosts, sortDates } from "~/js.util";

export default function App() {
  const posts = getPosts();
  const featured = posts.filter((post) => post.meta?.featured);

  return (
    <div>
      <DailyProverb />
      <div className="py-7 space-y-9">
        {featured
          .sort((post1, post2) => sortDates(post1.meta.date, post2.meta.date))
          .reverse()
          .map((post) => (
            <Post key={post.id} slug={post.id} meta={post.meta} />
          ))}
      </div>
    </div>
  );
}
