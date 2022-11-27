import { useState } from "react";
import { Button, Input, LoginBox } from "./Box.style";
import "./login-register.css";

export function BoxNewPassword() {
    const [hidePass, setHidePass] = useState<string>("password");
    const [confirmHidePass, setConfirmHidePass] = useState<string>("password");
    const [passeye, setPasseye] = useState<string>("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");
    const [confirmPasseye, setConfirmPasseye] = useState<string>("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");

    return (
        <LoginBox>
            <div>
                <h1>Recuperar senha</h1>
                <form action="">
                    <span>Senha</span>
                    <div className="submit-line">
                    <Input 
                        id="password"
                        type={hidePass}
                        placeholder="Min. 6 caracteres" 
                    />
                    <img 
                        className="submit-lente" 
                        src={passeye} 
                        onClick = {() => {
                            if (hidePass === "password") {
                                setHidePass("text");
                                setPasseye("https://icongr.am/fontawesome/eye-slash.svg?size=16&color=88898a");
                            } else {
                                setHidePass("password");
                                setPasseye("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");
                        }}}></img>                    
                    </div>
                    <span>Repetir senha</span>
                    <div className="submit-line">
                    <Input 
                        id="password"
                        type={confirmHidePass}
                        placeholder="Repita a senha" 
                    />
                    <img 
                        className="submit-lente" 
                        src={confirmPasseye} 
                        onClick = {() => {
                            if (confirmHidePass === "password") {
                                setConfirmHidePass("text");
                                setConfirmPasseye("https://icongr.am/fontawesome/eye-slash.svg?size=16&color=88898a");
                            } else {
                                setConfirmHidePass("password");
                                setConfirmPasseye("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");
                        }}}></img>  
                    </div>
                    <Button className="enter">Enviar</Button>
                </form>
            </div>
        </LoginBox>
    );
}
