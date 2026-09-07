import { useEffect, useState } from "react";
export function useTheme() {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return ["light", "dark", "system"].includes(saved) ? saved : "system";
    } catch {
      return "system";
    }
  });
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = (e) => setSystemDark(e.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const dark = mode === "dark" || (mode === "system" && systemDark);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    try {
      localStorage.setItem("portfolio-theme", mode);
    } catch {
      /* Optional storage. */
    }
  }, [mode, dark]);
  return { mode, setMode, dark };
}
