import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";
import { useContext } from "react";
import { fileContents } from "./files";

const GITHUB_PDF_URL =
  "https://github.com/semi710/semi710/blob/master/cv/semi.niksingh710.pdf";
const RAW_PDF_URL =
  "https://raw.githubusercontent.com/semi710/semi710/master/cv/semi.niksingh710.pdf";

const Cat: React.FC = () => {
  const { arg } = useContext(termContext);
  const originalArg = arg[0]?.toLowerCase() || "";

  // Handle missing file operand first
  if (!originalArg) {
    return (
      <Wrapper data-testid="cat">
        <span style={{ color: "#FF9D00" }}>cat: missing file operand</span>
        <br />
        <span>Try 'ls' to see available files</span>
      </Wrapper>
    );
  }

  // Special handling for resume.pdf - show download/view options
  if (originalArg === "resume.pdf" || originalArg === "resume") {
    return (
      <Wrapper data-testid="cat" style={{ width: "100%" }}>
        <div style={{ marginBottom: "10px" }}>
          <span style={{ color: "#05CE91" }}>resume.pdf</span>
        </div>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: "4px",
            padding: "20px",
            backgroundColor: "#1a1a1a",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <span style={{ fontSize: "3em" }}>📄</span>
          </div>
          <div style={{ marginBottom: "10px" }}>Resume/CV - Nikhil Singh</div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <a
              href={GITHUB_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#05CE91",
                textDecoration: "underline",
                padding: "5px 10px",
                border: "1px solid #05CE91",
                borderRadius: "4px",
              }}
            >
              View on GitHub
            </a>
            <a
              href={RAW_PDF_URL}
              download
              style={{
                color: "#FF9D00",
                textDecoration: "underline",
                padding: "5px 10px",
                border: "1px solid #FF9D00",
                borderRadius: "4px",
              }}
            >
              Download
            </a>
          </div>
        </div>
      </Wrapper>
    );
  }

  // Remove .txt extension for lookup
  const filename = originalArg.replace(/\.txt$/, "");
  const content = fileContents[filename];

  if (!content) {
    return (
      <Wrapper data-testid="cat">
        <span style={{ color: "#FF9D00" }}>
          cat: {originalArg}: No such file or directory
        </span>
      </Wrapper>
    );
  }

  return (
    <Wrapper data-testid="cat">
      <pre style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>{content}</pre>
    </Wrapper>
  );
};

export default Cat;
