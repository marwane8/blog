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

export function formatDate(date: string | Date, weekday = false) {
  if (!date) {
    return "";
  }
  const currDay = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[currDay.getDay()];
  const monthName = months[currDay.getMonth()];
  const day = currDay.getDate() + 1;
  const year = currDay.getFullYear();

  return weekday
    ? `${dayName} ${monthName} ${day}, ${year}`
    : `${monthName} ${day}, ${year}`;
}
