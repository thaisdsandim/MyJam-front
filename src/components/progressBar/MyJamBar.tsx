import ArrowLeft from "../../assets/images/ArrowLeft.png";

interface OnboardingBarProps {
  size: {
    width: string;
  };
}

export function OnboardingBar(props: OnboardingBarProps) {
  return (
    <div className="progress-container row">
      <div className=" col-1">
        <img src={ArrowLeft} alt="Arrow, previous page." />
      </div>
      <div className=" col-11 ">
        <div className="progress d-flex align-items-center">
          <div className="percent" style={props.size}></div>
        </div>
      </div>
    </div>
  );
}
