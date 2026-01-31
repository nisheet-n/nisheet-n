 "use client";

export type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

const canUseDOM = () => typeof window !== "undefined";

export const getInitialTheme = (): ThemeMode => {
  if (!canUseDOM()) {
    return "light";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export const applyTheme = (theme: ThemeMode) => {
  if (!canUseDOM()) {
    return;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
};

export const setStoredTheme = (theme: ThemeMode) => {
  if (!canUseDOM()) {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const toggleTheme = (current: ThemeMode): ThemeMode => {
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  setStoredTheme(next);
  return next;
};

export const initTheme = (): ThemeMode => {
  const initial = getInitialTheme();
  applyTheme(initial);
  return initial;
};
