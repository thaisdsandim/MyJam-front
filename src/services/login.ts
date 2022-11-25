import api from "./api"

interface LoginProps{
    email:string;
    password:string;
}

export function login(payload:LoginProps){
    return api.post("/login",payload);
}