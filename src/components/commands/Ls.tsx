import { Wrapper } from "../styles/Output.styled";
import { availableFiles } from "./files";

const Ls: React.FC = () => {
  return (
    <Wrapper data-testid="ls">
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {availableFiles.map(({ name, type }) => (
          <span key={name} style={{ color: "#05CE91" }}>
            {name}.{type}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default Ls;
