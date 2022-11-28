import { InfoContainer, InfoIcon } from "./InfoIcon.style";

interface InfoProps {
  // number: number;
  infoTitle?:string,
  color?:string,

}

export function InfoLesson(props: InfoProps) {
  return (
    <InfoContainer className="d-flex ">
      <InfoIcon style={{background:props.color}}>
        {/* <p >{props.number}</p>  */}
      </InfoIcon>
      <p className="info-title">{props.infoTitle}</p>
    </InfoContainer>
  );
}
// style={{ transform: "rotate(-45deg)" }}