import api from "./api";

interface UsuariosPayload{
    name: string;
    email:string;
    password:string;
   
}

export function cadastroUsuario(payload:UsuariosPayload){
    return api.post("/cadastro",payload);
}

