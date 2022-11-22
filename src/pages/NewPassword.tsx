import { BoxNewPassword } from "../components/login-register/BoxNewPassword";
import { Return } from "../components/login-register/Return";
import { Box } from "../components/login-register/Box.style";
import "../components/login-register/login-register.css";

export function NewPassword() {
    return (
        <Box>
            <div className="form">
                <Return />
                <BoxNewPassword />
            </div>
            <div className="imgLogin">
                <img src="src/assets/login-register/login.png" />
            </div>
        </Box>
    );
};
