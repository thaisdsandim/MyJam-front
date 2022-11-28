import { Link } from "react-router-dom";
import styled from "styled-components";

export function Return() {
    return (
        <BoxReturn>
            <div>
                <Link to={'/'}><img src="src/assets/images/login-register/seta.png" className="link"/></Link>
                <img src="src/assets/images/login-register/logo.png" className="logo"/>
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