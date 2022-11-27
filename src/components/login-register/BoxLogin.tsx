import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/login";
import { setUser } from "../../store/modules/user";
import { Button, Input, LoginBox } from "./Box.style";
import "./login-register.css";

const BoxLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [hidePass, setHidePass] = useState<string>("password");
    const [passeye, setPasseye] = useState<string>("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");
    const dispatch = useDispatch();

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
    
        const payload = {
          email,
          password,
        };
    
        try {
          const response = await login(payload);
          if (response.status !== 200) {
            return alert("erro no seu login");
          } else {
            console.log(response.data);
            dispatch(
              setUser({
                token: response.data.token,
                email,
              })
            );
          }
        } catch (error) {
          alert("Ocorreu um erro ao tentar fazer login!");
        }
    };

    return (
        <LoginBox>
            <div>
                <h1>Login</h1>
                <form>
                    <span>Email</span>
                    <Input
                        id="email"
                        type="email" 
                        placeholder="seuemail@site.com"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <span>Senha</span>
                    <div className="submit-line">
                    <Input
                        id="password"
                        type={hidePass}
                        placeholder="Senha"
                        min={6}
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
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
                        <Link to={''}><p>Esqueceu a senha?</p></Link>
                    <Button onClick={handleLogin} type="submit" className="enter">Login</Button>
                </form>
            </div>
        </LoginBox>
    );
}

export default BoxLogin;