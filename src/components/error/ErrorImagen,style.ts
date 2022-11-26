import styled from "styled-components";

export const ErrorImagenStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  .fundo {
    position: relative;
    @media only screen and (max-width: 600px) {
      margin-left: 2rem;
    }
  }
  .texto,
  img.violao {
    position: absolute;
  }
  img.imagefundo {
    width: 90%;
   
  }
  .violao {
    top: -16%;
    left: -20%;
    width: 71%;
    @media only screen and (max-width: 600px) {
        top: -11%;
        left: -20%;
        width: 66%;
    }
  }
  .texto404 {
    position: absolute;
    left: 34%;
    top: 28%;
  }
  .texto404 img {
    margin: 0 4px;
    width: 28%;
    filter: drop-shadow(6px 5px 0px #fd6e98);
    @media only screen and (max-width: 600px) {
      width: 22%;
    }
  }
  .texto {
    bottom: 33%;
    right: 14%;
    color: white;
    font-size: 1.4rem;
    @media only screen and (max-width: 600px) {
        font-size: 0.9rem;
      }
    }
  }
  `;
export const VoltarBotonStyle = styled.button`
  margin-bottom: 50px;
  margin-top: 60px;
  margin-left: 20%;
background: #6c5ece;
  border: none;
  box-shadow: 0px 5px 4px 0px #8321b1;
  border-radius: 20px;
  width: 300px;
  height: 65px;
   font-weight: 700;
  font-size: 24px;
  -webkit-box-shadow: 0px 5px #8321b1;

  &:hover {
    background-color: #6154b9;
  }
  &:active {
    padding-bottom: 10px;
    box-shadow: none;
  }
}
`;
