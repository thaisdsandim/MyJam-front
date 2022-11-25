import styled from "styled-components";


export const Nav = styled.header`
position:fixed;
top: 0;
left: 0;
width: 100%;
height: 132px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #222B35;
    box-shadow: 0 10px 10px rgba(0,0,0.025); 

`;


export const MenuLink = styled.img`
    padding: 1rem 0.7rem;
    @media only screen and (max-width: 600px){
        width: 80%;
        padding: 0rem 2rem;
    
    }
    

    

`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin: 0;
    padding-right: 4rem;

`;

export const LogoNav = styled.img`
    padding: 1rem 11rem;
    color:  #ffffff;
    text-decoration: none;
    font-weight: 900;
    font-size: 50px;
    margin: 0;

    @media only screen and (max-width: 800px){
        text-align: center;
        padding: 1rem 6rem;   
    }
`;

export const Logo = styled.a`
    padding: 1rem 0rem;
    color:  #ffffff;
    text-decoration: none;
    font-weight: 900;
    font-size: 50px;
    margin: 0;

    @media only screen and (max-width: 800px){
        text-align: center;
        padding: 1rem 0rem;   
    }
`;

