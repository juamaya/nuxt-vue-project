export const useTheme = () => {
  const theme = useState<"light" | "dark">("app-theme", () => "light");

  const isDark = computed(() => theme.value === "dark");

  const setTheme = (value: "light" | "dark") => {
    theme.value = value;

    if (import.meta.client) {
      localStorage.setItem("theme", value);
      document.documentElement.setAttribute("data-theme", value);
    }
  };

  const toggleTheme = () => {
    setTheme(isDark.value ? "light" : "dark");
  };

  const initTheme = () => {
    if (!import.meta.client) return;

    const savedTheme = localStorage.getItem("theme");

    const initialTheme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    setTheme(initialTheme);
  };

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    initTheme,
  };
};
