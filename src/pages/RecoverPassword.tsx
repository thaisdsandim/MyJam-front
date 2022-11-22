import { BoxRecover } from "../components/login-register/BoxRecover";
import { Return } from "../components/login-register/Return";
import { Box } from "../components/login-register/Box.style";
import "../components/login-register/login-register.css";

export function RecoverPassword() {
    return (
        <Box>
            <div className="form">
                <Return />
                <BoxRecover />
            </div>
            <div className="imgLogin">
                <img src="src/assets/login-register/login.png" />
            </div>
        </Box>
    );
};