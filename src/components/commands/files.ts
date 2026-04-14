// Shared file contents used by both Cat and Ls commands
export const fileContents: Record<string, string> = {
  skills: `Languages:
  • Rust      - Systems, performance-critical code
  • Nix       - Reproducible infrastructure
  • Go        - Backend services, CLIs
  • Java      - Enterprise systems
  • Python    - Scripts, automation, ML
  • C/C++     - Low-level, embedded
  • Haskell   - Functional programming
  • Bash      - Automation, daily driver
  • TypeScript - Full-stack JS

Systems & Infrastructure:
  • Linux (NixOS) - Daily driver, reproducible configs
  • QEMU/KVM      - Virtualization, VFIO passthrough
  • Docker/K8s    - Container orchestration
  • AWS/GCP       - Cloud platforms
  • CI/CD         - Jenkins, GitHub Actions

Datastores & Messaging:
  • Redis         - Caching, sessions
  • Kafka         - Event streaming
  • MySQL/MongoDB - Relational & document

Developer Tools:
  • Neovim (Nvix) - Sub-50ms startup, 100+ plugins
  • Git           - Version control
  • Tmux          - Terminal multiplexing`,

  philosophy: `Core Principles:

  Keyboard > Mouse
    Every action should be keyboard-accessible.
    Mouse is for browsing, keyboard is for creation.

  NixOS > Everything else
    Reproducibility is non-negotiable.
    "Works on my machine" is a bug, not a feature.

  Terminal > GUI
    Text-based interfaces are faster, scriptable,
    and work over SSH. GUIs are for discovery,
    terminals are for mastery.

  Declarative > Imperative
    Describe the desired state, let the system
    figure out how to get there.

  Performance matters
    Latency is user experience.
    Sub-100ms or go home.`,

  experience: `Product Engineer @ Juspay (2025 - Present)
  Building payment systems processing millions of TPS.
  80% reduction in PR review time via AI-first dev.
  Custom GPG library in Rust for secure ops.
  Nix devbox serving 800+ engineers.

M.Tech Researcher @ GBU (2023 - 2025)
  IEEE papers on NixOS reproducibility & ML climate modeling.

Software Developer @ Decet (2023 - 2024)
  Go deployment infrastructure, Python backends (10k+ req/day).

Package Maintainer @ Arch/NixOS (2020 - 2025)
  50k+ downloads, 10+ upstream contributions.`,

  contact: `Best way to reach me:

  Email:  nik.singh710@gmail.com

  Social:
    GitHub:   github.com/semi710
    Telegram: t.me/niksingh710
    Matrix:   @niksingh710:matrix.org
    X:        niksingh710
    LinkedIn: linkedin.com/in/niksingh710`,
};

// Export file list for ls command (txt files only)
export const availableFiles = [
  ...Object.keys(fileContents).map(name => ({
    name,
    type: "txt" as const,
  })),
  { name: "resume", type: "pdf" as const },
];
