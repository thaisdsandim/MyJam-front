import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/login";
import { setUser } from "../../store/modules/user";
import { Button, Input, LoginBox } from "./Box.style";
import "./login-register.css";

const BoxLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
  
    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();
        
        try {
           const response = await login ({email, password})
           console.log(response.data.token)
    
           dispatch(
            setUser({
              token: response.data.token,
              email
            })
           )
        } catch (error) {
          alert("Ocorreu um erro ao tentar fazer login!")
        }
    }

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
                    <Input
                        id="password"
                        type="password"
                        placeholder="Senha"
                        min={6}
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                        <Link to={''}><p>Esqueceu a senha?</p></Link>
                    <Button onClick={handleLogin} type="submit" className="enter">Login</Button>
                </form>
            </div>
        </LoginBox>
    );
}

export default BoxLogin;