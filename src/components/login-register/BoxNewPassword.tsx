import { Button, Input, LoginBox } from "./Box.style";
import "./login-register.css";

export function BoxNewPassword() {
    return (
        <LoginBox>
            <div>
                <h1>Recuperar senha</h1>
                <form action="">
                    <span>Senha</span>
                    <Input 
                        type="password" 
                        placeholder="Min. 6 caracteres" 
                    />
                    <span>Repetir senha</span>
                    <Input 
                        type="password" 
                        placeholder="Repita a senha" 
                    />
                    <Button className="enter">Enviar</Button>
                </form>
            </div>
        </LoginBox>
    );
}
