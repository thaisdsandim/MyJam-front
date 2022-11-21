import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-top: 50px;
    .form {
        padding-left: 120px;
        padding-right: 80px;
        width: 50%;
    }
    .imgLogin {
        padding-top: 20px;
        width: 50%;
        text-align: right;
    }
    .imgLogin img {
        max-width: 100%
    }
`;

export const Button = styled.button`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    background-color: #F8F8F8;
    border: 4px linear-gradient(#7C7C7C, #FFFFFF);
    border-radius: 30px;
    width: 100%;
    margin-bottom: 25px;
    padding: 20px 0px 20px 35px;
`;

export const LoginBox = styled.div`
    h1, span, p {
        font-family: 'Inter';
        font-style: normal;
        color: #F8F8F8;
    }
    h1 {
        padding-top: 55px;
        padding-bottom: 32px;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    }
    span, p {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }
    span {
        padding-bottom: 16px;
    }
    p {
        padding-bottom: 10px;
        text-decoration-line: underline;
        text-align: end;
    }
`;

export const Box2 = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-top: 20px;
    .form {
        padding-left: 120px;
        padding-right: 80px;
        width: 50%;
    }
    .imgLogin {
        padding-top: 30px;
        width: 50%;
        text-align: right;
    }
    .imgLogin img {
        max-width: 100%
    }
`;

export const RegisterBox = styled.div`
    h1, span, p {
        font-family: 'Inter';
        font-style: normal;
        color: #F8F8F8;
    }
    h1 {
        padding-top: 25px;
        padding-bottom: 25px;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    }
    span, p {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }
    span {
        padding-bottom: 16px;
    }
    p {
        padding-bottom: 10px;
        text-decoration-line: underline;
        text-align: end;
    }
`;