import styled from "styled-components";
import background from '../../assets/images/aulas/backgound.jpeg';

export const AulasC = styled.div`
  background-image: url(${background});
  height: 100%;
  width: 100%;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: #ffffff;
    margin-top: 40px;
  }

  img {
    align-items: center;
  }

  .listas ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-top: 80px;
  }
`;
