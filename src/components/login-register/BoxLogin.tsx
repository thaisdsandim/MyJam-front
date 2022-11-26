import { Button, Input, LoginBox } from "./Box.style";
import "./login-register.css";

export function BoxLogin() {
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
