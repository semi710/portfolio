import { useContext, useEffect } from "react";
import _ from "lodash";
import { themeContext } from "../../App";
import { Wrapper } from "../styles/Output.styled";
import { ThemeSpan, ThemesWrapper } from "../styles/Themes.styled";
import {
  checkThemeSwitch,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import theme from "../styles/themes";
import Usage from "../Usage";

const myThemes = _.keys(theme);

const Themes: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  const themeSwitcher = useContext(themeContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkThemeSwitch(rerender, currentCommand, myThemes)) {
      // For "set <theme>", theme name is at index 1
      const themeName = currentCommand[1];
      if (theme[themeName]) {
        themeSwitcher?.(theme[themeName]);
      }
    }
  }, [rerender, currentCommand, themeSwitcher]);

  return (
    <Wrapper data-testid="themes">
      <ThemesWrapper>
        {myThemes.map(myTheme => (
          <ThemeSpan key={myTheme}>{myTheme}</ThemeSpan>
        ))}
      </ThemesWrapper>
      <div style={{ marginTop: "10px", fontSize: "0.9em" }}>
        <div>Usage: set &lt;theme-name&gt;</div>
        <div style={{ opacity: 0.7 }}>eg: set ubuntu</div>
      </div>
    </Wrapper>
  );
};

export default Themes;
