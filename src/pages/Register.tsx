import BoxRegister from "../components/login-register/BoxRegister";
import { Return } from "../components/login-register/Return";
import { Box2 } from "../components/login-register/Box.style";
import "../components/login-register/login-register.css";

export function Register() {
    return (
        <Box2>
            <div className="form">
                <Return />
                <BoxRegister />
            </div>
            <div className="imgLogin">
                <img src="src/assets/login-register/register.png" />
            </div>
        </Box2>
    );
};
