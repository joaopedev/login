import React, { useState } from 'react';
import './login.css'
import Api from '../../Api'
import { MdMail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi"


const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    function onChange(event){
        
    }

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
                      <input 

                      placeholder="Digite sua senha"
                      type={show ? "text" :"password"}
                      value={password}
                      onChange={e => setPassword(e.target.value)}>
                      </input>

                      <div className="login-eye">
                            {show ? (< HiEye 
                                size={20}
                                onClick={handleClick}
                            />) : (<HiEyeOff 
                                size={20}
                                onClick={handleClick}
                            />)}
                      </div>

                  </div>   
                      <button className="bt1" type="submit">Entrar</button>
                      <h3>Nao tenho conta</h3>
                      <button className="bt2" type="submit">Cadastro</button>
                  
              </div> 
           

        </div>
    )
    
}

export default Login;
                      
                      