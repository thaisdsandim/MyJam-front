import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Input, RegisterBox } from "./Box.style";
import { cadastroUsuario } from "../../services/CadastroUsuarios";
import "./login-register.css";

const BoxRegister = () => {
    const [userName, setuserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [hidePass, setHidePass] = useState<string>("password");
    const [passeye, setPasseye] = useState<string>("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");

    const navigate = useNavigate();

    const cadastro = async (event: FormEvent) =>{
      event.preventDefault()

      const payload = {
        userName,
        email,
        password
      }

      try {
        const response = await cadastroUsuario(payload);
        if (!userName) {
            return alert("Preencha o nome corretamente!")
        }
        if (!email) {
            return alert("Preencha o email corretamente!")
        }
        if (!password) {
            return alert("Preencha a senha corretamente!")
        }
        if (password.length < 6) {
            return alert("A senha deve conter no mínimo 6 caracteres!")
        }
        if (response.status !== 200) {
            return alert(response.data)
        }
      } catch (error) {
        alert("Ocorreu um erro ao tentar fazer cadastro!");
      }
    }

    return (
        <RegisterBox>
            <div>
                <h1 className="h1register">Criar conta</h1>
                <form action="">
                    <span>Nome</span>
                    <Input 
                        type="text" 
                        placeholder="Nome/Nome Social"
                        value={userName} 
                        onChange={(event) => setuserName(event.target.value)}
                    />
                    <span>Email*</span>
                    <Input 
                        id="email"
                        type="email" 
                        placeholder="seuemail@site.com"
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <span>Senha*</span>
                    <div className="submit-line">
                    <Input
                        id="password"
                        type={hidePass}
                        placeholder="Min. 6 caracteres"
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
                    <br></br><br></br>
                    <Button onClick={cadastro} type="submit" className="enter">Criar conta</Button>
                </form>
            </div>
        </RegisterBox>
    );
}

export default BoxRegister;