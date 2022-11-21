import { ChangeEvent, useContext, useState } from "react";
import { Button, Input, LoginBox } from "./Box.style";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./login-register.css";

export function BoxLogin() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                alert("Não deu certo.");
            }
        }
    }
    return (
        <LoginBox>
            <div>
                <h1>Login</h1>
                <form action="">
                    <span>Email</span>
                    <Input 
                        type="email" 
                        placeholder="seuemail@site.com" 
                        value={email} 
                        onChange={handleEmailInput}
                    />
                    <span>Senha</span>
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={handlePasswordInput}
                    />
                        <Link to={''}><p>Esqueceu a senha?</p></Link>
                    <Button onClick={handleLogin} className="enter">Login</Button>
                </form>
                <Link to={'/onboarding'}><Button className="visitante">Entrar como visitante</Button></Link>
            </div>
        </LoginBox>
    );
}
