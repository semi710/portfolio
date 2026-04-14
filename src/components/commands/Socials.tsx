import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6"]) ? (
      <Usage cmd="socials" />
    ) : null;

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Connect with me (click to open)</ProjectsIntro>
      {socials.map(({ id, title, url, tab, handle }) => (
        <CmdList
          key={title}
          onClick={() => handleClick(url)}
          style={{ cursor: "pointer" }}
        >
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>
            {handle} —{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "inherit",
                textDecoration: "underline",
              }}
              onClick={e => e.stopPropagation()}
            >
              {url}
            </a>
          </CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    handle: "@semi710",
    url: "https://github.com/semi710",
    tab: 3,
  },
  {
    id: 2,
    title: "Email",
    handle: "nik.singh710@gmail.com",
    url: "mailto:nik.singh710@gmail.com",
    tab: 4,
  },
  {
    id: 3,
    title: "Telegram",
    handle: "@niksingh710",
    url: "https://t.me/niksingh710",
    tab: 2,
  },
  {
    id: 4,
    title: "Matrix",
    handle: "@niksingh710:matrix.org",
    url: "https://matrix.to/#/@niksingh710:matrix.org",
    tab: 3,
  },
  {
    id: 5,
    title: "Twitter/X",
    handle: "@niksingh710",
    url: "https://x.com/niksingh710",
    tab: 2,
  },
  {
    id: 6,
    title: "LinkedIn",
    handle: "/in/niksingh710",
    url: "https://linkedin.com/in/niksingh710",
    tab: 2,
  },
];

export default Socials;
