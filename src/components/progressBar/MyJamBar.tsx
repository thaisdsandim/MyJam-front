import ArrowLeft from "../../assets/images/ArrowLeft.png";

export interface MyJamBarProps {
  size: {
    width: string;
  };
  onClick: () => void;
}

export function MyJamBar(props: MyJamBarProps) {
  return (
    <div className="progress-container row">
      <div className=" col-1">
        <img
          src={ArrowLeft}
          alt="Arrow, previous page."
          onClick={props.onClick}
        />
      </div>
      <div className=" col-11 ">
        <div className="progress d-flex align-items-center">
          <div className="percent" style={props.size}></div>
        </div>
      </div>
    </div>
  );
}