import styled from "styled-components";

export const Enquadro = styled.div`
margin-top: 259px;

`

export const Lessons = styled.div`
 
  align-items: center;
  display: flex;
  text-align: center;
  align-content: center;
  margin: 10vh;
  
  

  .infos {
   text-align: center;
   align-items: center;
  }
  

  .infoH {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 26.5238px;
    line-height: 31px;
    color: #ffffff;
  }

  .divViola {
    text-align: center;
   align-items: center;
    width: 207px;
    height: 207px;
    background: #dcd7ff;
    border: 9.94643px solid #ffffff;
    box-shadow: -3.31548px 7.45982px 3.31548px rgba(0, 0, 0, 0.25);
    border-radius: 152.512px;
    :hover{
      background: #a89df2;
      box-shadow: 5px 5px #888888;
    }
  }
  

  .viola {
    width: 70%;
    height: 70%;
    margin-top: 26px;    
  }
  .viola:hover{
    animation: pulsante 2s alternate;
}

@keyframes pulsante{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(1.1);
    }
    50%{
        transform: scale(0.9);
    }
    75%{
        transform: scale(1.05);
    }
    100%{
        transform: scale(1);
    }
}

  .playL {
    margin-top: -40px;
    border-radius: 50%;
  }
  .playL:hover{
    animation-name: botao;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    background: linear-gradient(269.26deg, #8321B1 6.12%, #C72A25 95.01%);
/* box-shadow: 0px 3.31548px 3.31548px rgba(0, 0, 0, 0.25); */
    /* box-shadow: 0 0 50px 20px rgba(255, 0, 72, 0.5);  */
}

@keyframes botao{
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.05);
    }

}
`;
