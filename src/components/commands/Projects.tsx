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

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && url && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Featured projects with real-world impact. <br />
        Type '<code>projects go 3</code>' to visit or click to open.
      </ProjectsIntro>
      {projects.map(({ id, title, desc, tech, metrics, url }) => (
        <ProjectContainer
          key={id}
          onClick={() => window.open(url, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          {tech && (
            <div
              style={{ marginTop: "4px", color: "#05CE91", fontSize: "0.9em" }}
            >
              Tech: {tech}
            </div>
          )}
          {metrics && (
            <div
              style={{ marginTop: "4px", color: "#FF9D00", fontSize: "0.9em" }}
            >
              Impact: {metrics}
            </div>
          )}
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Ndots",
    desc: "Modular NixOS system configuration. Declarative, reproducible, hardware-agnostic deployments using flakes, disko, and home-manager.",
    tech: "Nix, NixOS, Flakes, home-manager",
    metrics: "50+ developers using it | Days → 30 min deploy time",
    url: "https://github.com/semi710/ndots",
  },
  {
    id: 2,
    title: "Nvix",
    desc: "Neovim distribution optimized for terminal-centric workflows. Lazy-loaded, minimal startup time, batteries included.",
    tech: "Lua, Nix, TreeSitter, LSP, DAP",
    metrics: "Sub-50ms startup | 100+ plugins | 20+ languages",
    url: "https://github.com/semi710/nvix",
  },
  {
    id: 3,
    title: "Tmux Minimal Status",
    desc: "Clean, informative tmux status line that's minimal yet functional. No bloat, just essential info.",
    tech: "Shell, Tmux",
    metrics: "240+ GitHub stars | Upstreamed to nixpkgs & Hyprwm",
    url: "https://github.com/semi710/minimal-tmux-status",
  },
  {
    id: 4,
    title: "QKM",
    desc: "QEMU/KVM hardware passthrough manager. Sub-1ms latency keyboard firmware passthrough with VFIO and PCI device isolation. (Private)",
    tech: "QEMU, KVM, VFIO, IOMMU, C",
    metrics: "Used for competitive gaming & low-latency workloads",
    url: "",
  },
  {
    id: 5,
    title: "Android CI/CD Pipeline",
    desc: "Automated AOSP build pipeline supporting 15+ devices with custom modifications and OTA updates.",
    tech: "Jenkins, AOSP, Bash, Python",
    metrics: "15+ devices | 10k+ users | 99% stability",
    url: "https://github.com/semi710",
  },
];

export default Projects;
