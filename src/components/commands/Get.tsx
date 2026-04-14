import { useContext, useEffect, useRef } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

// Global flag to track if download was triggered in this session
if (typeof window !== "undefined") {
  (window as any).__resumeDownloaded =
    (window as any).__resumeDownloaded || false;
}

const Get: React.FC = () => {
  const { arg, rerender } = useContext(termContext);
  const target = arg[0]?.toLowerCase().replace(/\.pdf$/, "");
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (
      (target === "cv" || target === "resume") &&
      rerender &&
      !hasTriggered.current &&
      !(window as any).__resumeDownloaded
    ) {
      hasTriggered.current = true;
      (window as any).__resumeDownloaded = true;

      // Small delay to avoid immediate re-trigger
      setTimeout(() => {
        // Download the PDF
        const link = document.createElement("a");
        link.href =
          "https://github.com/semi710/semi710/raw/master/cv/semi.niksingh710.pdf";
        link.download = "nikhil-singh-resume.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 100);
    }
  }, [target, rerender]);

  if (target === "cv" || target === "resume") {
    return (
      <Wrapper data-testid="get">
        <span style={{ color: "#05CE91" }}>Downloading resume...</span>
        <br />
        <span>If download didn't start automatically:</span>
        <br />
        <a
          href="https://github.com/semi710/semi710/raw/master/cv/semi.niksingh710.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#05CE91", textDecoration: "underline" }}
        >
          Click here to download
        </a>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-testid="get">
      <span style={{ color: "#FF9D00" }}>get: unknown target '{target}'</span>
      <br />
      <span>Usage: get (cv | resume.pdf)</span>
    </Wrapper>
  );
};

export default Get;
