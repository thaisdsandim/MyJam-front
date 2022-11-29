import { Link } from "react-router-dom";
import styled from "styled-components";
import Seta from "../../assets/images/login-register/seta.png";
import Logo from "../../assets/images/login-register/logo.png";

export function Return() {
    return (
        <BoxReturn>
            <div>
                <Link to={'/'}><img src={Seta} className="link"/></Link>
                <img src={Logo} className="logo"/>
            </div>
        </BoxReturn>
    );
}

const BoxReturn = styled.div`
    padding-top: 18px;
    .link {
        max-width: 24px;
        margin-right: 102px;
    }
    .logo {
        max-width: 191px;
    }

    @media screen and (max-width: 480px) {
        .link {
            margin-right: 30px;
        }
    }
`;