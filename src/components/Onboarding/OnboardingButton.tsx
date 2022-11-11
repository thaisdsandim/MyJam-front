import * as React from "react";
import * as S from "./button.style";

type OnboardingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  title: string;
};

export function OnboardingButton({
  children,
  title,
  ...props
}: OnboardingButtonProps) {
  return (
    <S.Container {...props}>
      <p>{title}</p>
      {children}
    </S.Container>
  );
}
