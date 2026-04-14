import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Work: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "works")) {
      works.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="works" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Experience timeline (reverse chronological). <br />
        Type '<code>works go &lt;n&gt;</code>' for details.
      </ProjectsIntro>
      {works.map(({ id, title, period, role, desc, highlights }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title} [${period}]`}</ProjectTitle>
          <div style={{ color: "#05CE91", marginBottom: "8px" }}>{role}</div>
          <ProjectDesc>{desc}</ProjectDesc>
          {highlights && (
            <div style={{ marginTop: "8px", fontSize: "0.9em" }}>
              <div style={{ color: "#FF9D00" }}>Key Impact:</div>
              <ul style={{ marginLeft: "20px", marginTop: "4px" }}>
                {highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </ProjectContainer>
      ))}
      <Usage cmd="works" marginY />
    </div>
  );
};

const works = [
  {
    id: 1,
    title: "Juspay Technologies",
    period: "2025 - Present",
    role: "Product Engineer",
    desc: "Building high-throughput payment infrastructure serving millions of daily transactions.",
    highlights: [
      "80% reduction in manual PR review effort via AI-first development with fine-tuned models",
      "Millions of TPS (Project Bernoulli) - Rust-based SDK for enterprise merchants",
      "Custom GPG library in Rust with MDC payload for secure crypto ops",
      "Nix-based devbox: 800+ engineers onboard in minutes vs hours",
      "Event-driven UPI services: sub-100ms latency, 99.99% uptime",
      "60% API latency reduction (200ms → 80ms) via Redis + async",
    ],
    url: "https://juspay.in",
  },
  {
    id: 2,
    title: "Gautam Buddha University",
    period: "2023 - 2025",
    role: "M.Tech Researcher",
    desc: "Research on reproducible infrastructure and ML-based climate modeling.",
    highlights: [
      "IEEE paper: Modular NixOS configurations for reproducible OS management",
      "Co-authored IEEE paper: ML-based heavy rainfall prediction (Northern Himalayan region)",
      "Nix flake configs with disko/home-manager for hardware-agnostic deploys",
    ],
    url: "https://gbu.ac.in",
  },
  {
    id: 3,
    title: "Decet Technology",
    period: "2023 - 2024",
    role: "Software Developer Intern",
    desc: "Backend development and deployment infrastructure.",
    highlights: [
      "Built deployment infrastructure in Go (personal initiative)",
      "Core Python backend services: 10k+ daily requests",
    ],
    url: "https://decet.io",
  },
  {
    id: 4,
    title: "Arch Linux & NixOS",
    period: "2020 - 2025",
    role: "Package Maintainer",
    desc: "Open source package maintenance and upstream contributions.",
    highlights: [
      "15+ AUR/Nix packages with 50k+ combined downloads",
      "10+ upstream fixes to nixpkgs & Hyprwm",
      "Hosted custom binary cache for teams and personal infra",
    ],
    url: "https://github.com/semi710",
  },
];

export default Work;