import * as S from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-bootstrap/";
import { Main } from "./styles";

export function Onboarding() {
  return (
    <>
      <Main className="container">
        <ProgressBar className="progressbar" variant="black" now={40} />
        <div className="row align-items-center justify-content-center">
          <h1 className="title text-center">
            Você já tem alguma experiência com o violão?
          </h1>
          <div className="d-flex flex-column gap-5 align-items-center">
            <S.Container>
              <p>Nenhuma</p>
            </S.Container>
            <S.Container>
              <p>Já tenho alguma experiência</p>
            </S.Container>
          </div>
        </div>
      </Main>
    </>
  );
}
