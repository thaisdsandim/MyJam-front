import { BoxRecover } from "../components/login-register/BoxRecover";
import { Return } from "../components/login-register/Return";
import { Box } from "../components/login-register/Box.style";
import "../components/login-register/login-register.css";
import NewImg from "../assets/images/login-register/login.png";

export function RecoverPassword() {
    return (
        <Box>
            <div className="form">
                <Return />
                <BoxRecover />
            </div>
            <div className="imgLogin">
                <img src={NewImg} />
            </div>
        </Box>
    );
};