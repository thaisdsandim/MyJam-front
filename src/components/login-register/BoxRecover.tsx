import { Button, Input, LoginBox } from "./Box.style";
import { Link} from "react-router-dom";
import "./login-register.css";

export function BoxRecover() {
    return (
        <LoginBox>
            <div>
                <h1>Recuperar senha</h1>
                <form action="">
                    <span>Email</span>
                    <Input 
                        type="email" 
                        placeholder="seuemail@site.com" 
                    />
                    <Button className="enter">Enviar</Button>
                </form>
            </div>
        </LoginBox>
    );
}
