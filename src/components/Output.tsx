import About from "./commands/About";
import Cat from "./commands/Cat";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Get from "./commands/Get";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Ls from "./commands/Ls";
import Projects from "./commands/Projects";
import SetTheme from "./commands/SetTheme";
import Work from "./commands/Work";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = [
    "projects",
    "socials",
    "themes",
    "set",
    "echo",
    "works",
    "cat",
    "ls",
    "get",
  ];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  const commandMap: Record<string, JSX.Element> = {
    about: <About />,
    cat: <Cat />,
    clear: <Clear />,
    echo: <Echo />,
    education: <Education />,
    email: <Email />,
    get: <Get />,
    gui: <Gui />,
    help: <Help />,
    history: <History />,
    ls: <Ls />,
    projects: <Projects />,
    set: <SetTheme />,
    works: <Work />,
    pwd: <GeneralOutput>/home/niksingh710</GeneralOutput>,
    socials: <Socials />,
    themes: <Themes />,
    welcome: <Welcome />,
    whoami: <GeneralOutput>visitor</GeneralOutput>,
  };

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {commandMap[cmd] ?? null}
    </OutputContainer>
  );
};

export default Output;
