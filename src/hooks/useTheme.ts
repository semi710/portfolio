import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    // Validate theme exists before setting
    if (mode && mode.name && themes[mode.name]) {
      setToLS("tsn-theme", mode.name);
      setTheme(mode);
    }
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    // Validate theme exists, fallback to dark
    if (localThemeName && themes[localThemeName]) {
      setTheme(themes[localThemeName]);
    } else {
      setTheme(themes.dark);
      // Clear invalid theme from storage
      if (localThemeName) {
        setToLS("tsn-theme", "dark");
      }
    }
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
