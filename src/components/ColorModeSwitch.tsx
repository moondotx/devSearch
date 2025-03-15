import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-800 dark:text-white">
        {darkMode ? "Light" : "Dark"}
      </span>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? (
          <LuSun className="text-white" />
        ) : (
          <LuMoon className="text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default ColorModeToggleButton;
