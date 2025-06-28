import { createContext, useContext } from "react";

export default function DarkToggle() {
  const { darkMode, setDarkMode } = useDarkModeContext();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`relative flex items-center justify-center size-full rounded-full transition-colors`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        // Sun icon
        <svg
          className="size-full fill-current hover:fill-amber-300 transition-colors duration-200"
          viewBox="0 0 512 512"
        >
          <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
        </svg>
      ) : (
        // Moon icon
        <svg fill="none" viewBox="0 0 24 24">
          <path
            className="size-full fill-current hover:fill-indigo-500 transition-colors duration-200"
            fill="currentColor"
            d="M12 22c5.5228 0 10-4.4772 10-10 0-.4627-.6935-.5392-.9328-.1432C19.9289 13.7406 17.8615 15 15.5 15 11.9101 15 9 12.0899 9 8.5c0-2.36155 1.2594-4.42895 3.1432-5.56724C12.5392 2.69347 12.4627 2 12 2 6.47715 2 2 6.47715 2 12c0 5.5228 4.47715 10 10 10Z"
          />
        </svg>
      )}
    </button>
  );
}

type DarkModeContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};
export const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}
