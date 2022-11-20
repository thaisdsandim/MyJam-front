
interface InfoProps {
  title: string;
  number: number;
}

export function InfoLesson(props: InfoProps) {
  return <span>{props.number}</span>;
}
