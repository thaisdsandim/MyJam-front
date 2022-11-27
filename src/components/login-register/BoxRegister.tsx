import { FormEvent, useState } from "react";
import { Button, Input, RegisterBox } from "./Box.style";
import { cadastroUsuario } from "../../services/CadastroUsuarios";
import "./login-register.css";

const BoxRegister = () => {
    const [userName, setuserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [hidePass, setHidePass] = useState<string>("password");
    const [passeye, setPasseye] = useState<string>("https://icongr.am/fontawesome/eye.svg?size=16&color=88898a");

    const cadastro = async (event: FormEvent) =>{
      event.preventDefault()

      const payload = {
        userName,
        email,
        password
      }

      try {
        const response = await cadastroUsuario(payload);
        if (response.status !== 201) {
          return alert("Ocorreu um erro!")
        }
        alert("Cadastro efetuado com sucesso!");
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
                        required
                        value={userName} 
                        onChange={(event) => setuserName(event.target.value)}
                    />
                    <span>Email*</span>
                    <Input 
                        id="email"
                        type="email" 
                        placeholder="seuemail@site.com"
                        required
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <span>Senha*</span>
                    <div className="submit-line">
                    <Input
                        id="password"
                        type={hidePass}
                        placeholder="Min. 6 caracteres"
                        required
                        min={6}
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