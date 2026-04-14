import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "M.Tech in Computer Science & Engineering",
    desc: "Gautam Buddha University | 2023 - 2025 | CGPA: 8.83",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    desc: "Gautam Buddha University | 2020 - 2023",
  },
  {
    title: "High School (10th & 12th) | Science Stream",
    desc: "Holy Trinity Church School | 2016 - 2020",
  },
];

export default Education;
