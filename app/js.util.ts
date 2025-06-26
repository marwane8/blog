export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type Frontmatter = {
  title: string;
  date: string; // YYYY-MM-DD
  featured: boolean;
  summary: string;
  tags: string[];
};

export function getPosts() {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "./routes/_blog.*.mdx",
    { eager: true }
  );

  const posts = Object.entries(modules).map(([file, post]) => {
    const id = file.replace("./routes/_blog.", "").replace(/\.mdx$/, "");
    return {
      id: id,
      meta: post.frontmatter,
    };
  });
  return posts;
}
