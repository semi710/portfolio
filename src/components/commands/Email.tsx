import { Wrapper } from "../styles/Output.styled";

const Email: React.FC = () => {
  const handleClick = () => {
    window.location.href = "mailto:nik.singh710@gmail.com";
  };

  return (
    <Wrapper>
      <span>Email: </span>
      <button
        type="button"
        onClick={handleClick}
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          color: "#05CE91",
          background: "none",
          border: "none",
          padding: 0,
          font: "inherit",
        }}
      >
        nik.singh710@gmail.com
      </button>
      <span> (click to open)</span>
    </Wrapper>
  );
};

export default Email;
