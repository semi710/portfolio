import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        <HighlightSpan>$ whoami</HighlightSpan>
      </p>
      <p>
        <HighlightAlt>Nikhil Singh</HighlightAlt> — Systems Engineer shipping
        high-performance infrastructure.
      </p>
      <br />
      <p>
        Currently building payment systems processing{" "}
        <HighlightSpan>millions of TPS</HighlightSpan> at Juspay. Deep in{" "}
        <HighlightAlt>Rust</HighlightAlt>, <HighlightAlt>NixOS</HighlightAlt>,
        and <HighlightAlt>AI-assisted workflows</HighlightAlt>.
      </p>
      <br />
      <p>
        <HighlightSpan>$ cat skills.txt</HighlightSpan>
      </p>
      <p>
        Languages:{" "}
        <HighlightAlt>Rust, Nix, Go, Java, Python, C/C++, Bash</HighlightAlt>
      </p>
      <p>
        Systems:{" "}
        <HighlightAlt>NixOS, QEMU/KVM, low-latency optimization</HighlightAlt>
      </p>
      <p>
        Tools: <HighlightAlt>Neovim, Docker, K8s, AWS, CI/CD</HighlightAlt>
      </p>
      <br />
      <p>
        <HighlightSpan>$ cat philosophy.txt</HighlightSpan>
      </p>
      <p>• Keyboard {">"} Mouse</p>
      <p>• NixOS {">"} Everything else</p>
      <p>• Terminal {">"} GUI</p>
      <br />
      <p>
        <HighlightSpan>$ ls</HighlightSpan>
      </p>
      <p>
        <span style={{ color: "#05CE91" }}>
          skills.txt philosophy.txt experience.txt contact.txt resume.pdf
        </span>
      </p>
      <br />
      <p>
        <HighlightSpan>$ get cv</HighlightSpan>
      </p>
      <p>Download resume/CV</p>
      <br />
      <p>
        <HighlightSpan>Run: ls, cat, get cv, projects, works</HighlightSpan>
      </p>
      <p>Download resume/CV</p>
      <br />
      <p>
        <HighlightSpan>Run: ls, cat, get pdf, projects, works</HighlightSpan>
      </p>
    </AboutWrapper>
  );
};

export default About;
