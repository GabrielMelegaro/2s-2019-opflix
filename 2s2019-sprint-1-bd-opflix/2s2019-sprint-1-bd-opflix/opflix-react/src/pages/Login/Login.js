import React, { Component } from "react";

import logo from '../../assets/img/image.jpg';

import { Link } from 'react-router-dom';

import Axios from "axios";

import Navegacao from '../../Components/Navegacao';

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email: "",
            senha: "",
            erro: ""
        }
    }

    mudarEmail = (event) =>{
        this.setState({email: event.target.value})
    }
    
    mudarSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    efetuarLogin = (event) =>{
        event.preventDefault();
        Axios.post("http://localhost:5000/api/login", {
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data =>{
                if(data.status === 200){
                    localStorage.setItem("usuario-opflix", data.data.token);
                    this.props.history.push('/');
                }else{
                    console.log("Errrrrrrrrrrrooooooooooouuuuuuuuuuu!!!!!!")
                }
            })
            .catch(erro => {
                this.setState({erro: "Usuario ou Senha Inválido"});
            })
    }

    render(){
        return(
            <section className="container-flex">
                <div className="item">
                <Navegacao />
                    <img src={logo} className="icone__login" />
                </div>
                <div className="item" id="item__title">
                    <p className="text__login" id="item__description">
                        Seja muito Bem-Vindo! Faça o login para ter acesso a mais conteúdos.
                    </p>
                </div>
                <form onSubmit={this.efetuarLogin}>
                    <div className="item">
                        <input className="input__login" placeholder="email" type="text"
                        name="username" id="login__email" onChange={this.mudarEmail}
                        value={this.state.email} />
                    </div>
                    <div className="item">
                        <input className="input__login" placeholder="senha" type="text"
                        name="password" id="login__password" onChange={this.mudarSenha}
                        value={this.state.senha} />
                    </div>
                    <div className="item">
                        <button className="btn btn__login" id="btn__login" >
                            Logar-Se
                        </button>
                    </div>
                    <div className="item">
                        <Link to='/cadastro'>Cadastre-Se</Link>
                    </div>
                    <p className="text__login" style={{color: "red", textAlign: "center"}}
                    >
                        {this.state.erro}
                    </p>
                </form>
            </section>
        );
    }
}