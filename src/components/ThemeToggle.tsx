import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2 p-2 rounded-full  transition text-gray-800 dark:text-gray-100"
    >
      <span className="text-gray-800 dark:text-gray-100">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
      {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
    </button>
  );
};

export default ThemeToggle;
