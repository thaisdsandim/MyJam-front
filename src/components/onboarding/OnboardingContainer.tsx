interface OnboardingContainerProps {
  title?: string;
  children: React.ReactNode;
}

export const OnboardingContainer: React.FC<OnboardingContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-auto">
          <h1 className="onboarding-title">{title}</h1>
        </div>
      </div>
      {children}
    </div>
  );
};
