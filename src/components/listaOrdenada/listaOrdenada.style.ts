import styled from "styled-components";

export const Title = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const SectionCard = styled.div `
    justify-content: center;
    display: flex;
    margin: 3rem ;

    

    ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
        counter-reset: number;
    }

    li:before {
        content: counter(number);
        counter-increment: number;
        color: red;
        font-size: 30px;
        border: solid 1px blue;
        border-spacing: 10rem;
        border-radius: 80%;

    }
`;

 

