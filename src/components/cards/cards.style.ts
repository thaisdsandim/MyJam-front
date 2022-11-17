import styled from "styled-components";

export const Title = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const SectionCards = styled.div `
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 3rem ;

    .cards {
        max-width: 95%;
        border: solid black 1px;
        border-radius: 10px;
        padding: 9rem 1rem 1rem 1rem ;
        margin-bottom: 2rem;
    }

    .cards h2 {
        margin-bottom: 1rem;
    }
`;

 

