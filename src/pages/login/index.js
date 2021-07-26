import React from 'react';
import './login.css'
import { FaBeer } from 'react-icons/fa'

const login = () => {
    return (
        <div className="login">
           <div className="login-logo" >
           <img src="https://matricula2020.com.br/wp-content/uploads/2019/04/login.png">
           </img>
           </div>
              <div className="login-right">
                  <h1>Acessar app</h1>
                  <div className="loginInputEmail">
                      <input type="text"
                      placeholder="Digite um email">
                      </input>
                  </div>
                  <div className="loginPassword">
                      <input type="text"
                      placeholder="Digite sua senha">
                      </input>
                  </div>
              </div> 
           

        </div>
    )
    
}

export default login;