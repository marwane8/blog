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
        <svg className="size-full fill-current" viewBox="0 0 512 512">
          <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
        </svg>
      ) : (
        <svg className="size-full fill-current py-[1px]" viewBox="0 0 512 512">
          <path d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z" />
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
