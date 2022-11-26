import { FormEvent, useState } from "react";
import { Button, Input, RegisterBox } from "./Box.style";
import { cadastroUsuario } from "../../services/CadastroUsuarios";
import "./login-register.css";

const BoxRegister = () => {
    const [userName, setuserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

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
                        value={userName} 
                        onChange={(event) => setuserName(event.target.value)}
                    />
                    <span>Email*</span>
                    <Input 
                        type="email" 
                        placeholder="seuemail@site.com" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <span>Senha*</span>
                    <Input
                        type="password"
                        placeholder="Min. 6 caracteres"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br></br><br></br>
                    <Button onClick={cadastro} type="submit" className="enter">Criar conta</Button>
                </form>
            </div>
        </RegisterBox>
    );
}

export default BoxRegister;