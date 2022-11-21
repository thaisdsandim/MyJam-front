import { InfoContainer, InfoIcon } from "./InfoIcon.style";

interface InfoProps {
  number: number;
  title: string;
  background: string;
}

export function InfoLesson(props: InfoProps) {
  return (
    <InfoContainer className="d-flex ">
      <InfoIcon style={{ background: props.background }}>
        <p style={{ transform: "rotate(-45deg)" }}>{props.number}</p>
      </InfoIcon>
      <p className="info-title">{props.title}</p>
    </InfoContainer>
  );
}
