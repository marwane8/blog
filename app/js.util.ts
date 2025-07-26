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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[currDay.getDay()];
  const monthName = months[currDay.getMonth()];
  const day = currDay.getDate();
  const year = currDay.getFullYear();

  return weekday
    ? `${dayName} ${monthName} ${day}, ${year}`
    : `${monthName} ${day}, ${year}`;
}

function parseDate(str: string): Date {
  return new Date(str.replace(/(\d+)(st|nd|rd|th)/, "$1"));
}

export const sortDates = (a: string, b: string) =>
  parseDate(a).getTime() - parseDate(b).getTime();
