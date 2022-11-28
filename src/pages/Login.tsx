import BoxLogin from "../components/login-register/BoxLogin";
import { Return } from "../components/login-register/Return";
import { Box } from "../components/login-register/Box.style"
import "../components/login-register/login-register.css"

export function Login() {
    return (
        <Box>
            <div className="form">
                <Return />
                <BoxLogin />
            </div>
            <div className="imgLogin">
                <img src="src/assets/images/login-register/login.png" />
            </div>
        </Box>
    );
};