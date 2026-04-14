import { useContext, useEffect } from "react";
import _ from "lodash";
import { themeContext } from "../../App";
import { Wrapper } from "../styles/Output.styled";
import { checkThemeSwitch, getCurrentCmdArry } from "../../utils/funcs";
import { termContext } from "../Terminal";
import theme from "../styles/themes";

const myThemes = _.keys(theme);

const SetTheme: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const themeSwitcher = useContext(themeContext);
  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkThemeSwitch(rerender, currentCommand, myThemes)) {
      const themeName = currentCommand[1];
      if (theme[themeName]) {
        themeSwitcher?.(theme[themeName]);
      }
    }
  }, [rerender, currentCommand, themeSwitcher]);

  // Show current theme set result
  if (arg.length === 0) {
    return (
      <Wrapper data-testid="set">
        <span style={{ color: "#FF9D00" }}>Usage: set &lt;theme-name&gt;</span>
        <br />
        <span>eg: set ubuntu</span>
        <br />
        <span>Available: {myThemes.join(", ")}</span>
      </Wrapper>
    );
  }

  const themeName = arg[0];
  if (!theme[themeName]) {
    return (
      <Wrapper data-testid="set">
        <span style={{ color: "#FF9D00" }}>
          set: invalid theme '{themeName}'
        </span>
        <br />
        <span>Available: {myThemes.join(", ")}</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-testid="set">
      <span style={{ color: "#05CE91" }}>Theme set to: {themeName}</span>
    </Wrapper>
  );
};

export default SetTheme;
