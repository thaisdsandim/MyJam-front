import styled from "styled-components";
import background from '../../assets/images/aulas/backgound.jpeg';

export const Container = styled.div `
background-color: #222B35;
padding-top: 2rem;
`;

export const Title = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F8F8F8;
    font-size: 35px;
    margin: 0 0 4rem 0

`;

export const SectionCard = styled.div `
    justify-content: center;
    display: flex;
    max-width: 1080px;
    margin: 3rem auto;

    

    div img {
        height: 75%;
    }

    .aside {
        max-width: 50%
    }
    
    

    .numberCircle {
        display: flex;
        color: #F8F8F8;

        

    }


    .number {

        font-size: 25px;
        border: solid 1px #6C5ECE;;
        border-radius: 50%;
        padding: 0 10px 0px ;
        margin: 0 0rem 2rem 0

    }

    .numberCircle p {
        font-size: 25px;
        margin-left: 0;


    }

    span {
        color: #F8F8F8;
        font-size: 14px
    }

    hr{
        color: #6C5ECE;
    }
`;

 

