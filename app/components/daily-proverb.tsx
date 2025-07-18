import { formatDate } from "~/js.util";

export default function DailyProverb() {
  const today: Date = new Date();

  const proverbIndex =
    (today.getFullYear() + today.getMonth() + today.getDate()) %
    PROVERBS.length;

  return (
    <div className="w-fit mx-auto my-7 md:my-20">
      <div className="font-lexend  italic text-3xl md:text-4xl font-semibold max-w-screen-md">
        <div className="translate-y-12">&quot;</div>
        <br /> {PROVERBS[proverbIndex]} &quot;
      </div>
      <div className="text-right my-2 text-lg md:text-xl italic dark:text-stone-500 text-stone-400 font-light">
        {formatDate(today, true)}
      </div>
    </div>
  );
}

const PROVERBS = [
  "All trees begin with a seed.",
  "The best of beauty is beautiful manners.",
  "The truth is the lost property of scholar.",
  "One hand doesn't clap.",
  "The eye sees, but the arm is short.",
  "Laugh and the world laughs with you. weep, and you weep alone.",
  "If you have an opinion, you better be determined.",
  "Ask the experienced rather than the learned.",
  "No crowd ever waited at the gates of patience.",
  "Wealth comes like a turtle, and runs away like a gazelle.",
  "Planning is half of living.",
  "Flaseness lasts an hour, the truth lasts until the end of time.",
  "Every dog has its day.",
];
