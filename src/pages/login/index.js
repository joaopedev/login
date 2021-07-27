import React, { useState } from 'react';
import './login.css'
import { MdMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { BsFillEyeFill, AiFillEyeInvisible } from "react-icons/hi"


const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    return (
        <div className="login">
           <div className="login-logo" >
           <img src="https://matricula2020.com.br/wp-content/uploads/2019/04/login.png">
           </img>
           </div>
              <div className="login-right">
                  <h1>Acessar app</h1>
                  <div className="loginEmail">
                      <MdMail />
                      <input type="text"
                      placeholder="Digite um email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      >
                      </input>
                  </div>
                  <div className="loginPassword">
                      <MdLock />
                      <input type={show ? "text" :"passaword"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={e => setPassword(e.target.value)}>
                      </input>
                  </div>   
                      <button className="bt1" type="submit">Entrar</button>
                      <h3>Nao tenho conta</h3>
                      <button className="bt2" type="submit">Cadastro</button>
                  
              </div> 
           

        </div>
    )
    
}

export default login;
                      
                      