import React, { Component } from 'react';

import Axios from "axios";

import logo from '../../assets/img/image.jpg';

import {  Link  } from 'react-router-dom';

export default class Cadastro extends Component{
    constructor(){
        super();
        this.state={
            nome: "",
            email: "",
            senha: "",
        }
    }

    mudarNome = (event) =>{
        this.setState({nome: event.target.value});
    }

    mudarEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    mudarSenha = (event) =>{
        this.setState({senha: event.target.value});
    }

    efetuarCadastro = (event) =>{
        event.preventDefault();
        Axios.post("http://localhost:3000/api/cadastro", {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        })
            .then(data =>{
                if(data.status === 200){
                    localStorage.setItem("usuario-opflix", data.data.token);
                    this.props.history.push('/login');
                }else{
                    console.log("Acesso Negado!")
                }
            })
    }

    render(){
        return(
            <section className="container-flex">
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <nav className="cabecalhoPrincipal-nav">
                    <Link to='/'>Home</Link>
                    <Link to='/lancamentos'>Lancamentos</Link>
                    <Link to='/categorias'>Categorias</Link>
                    <Link to='/plataformas'>Plataformas</Link>
                    <Link to='/cadastro'>Cadastre-Se</Link>
                    <Link className="cabecalhoPrincipal-nav-cadastro" to="/cadastro">cadastro</Link>
                    <h1>OPFLIX</h1>
                    </nav>
                    </div>
                </header>
                <div className="item__cadastro"><div className="img__overlay"></div></div>

                <div className="item__cadastro">
                    <div className="row">
                        <div className="item">
                            <img src={logo} className="icone__cadastro" />
                        </div>
                        <nav className="item" id="item__title">
                            <p className="text__cadastro" id="item__description">
                                Seja muito Bem-Vindo! Faça o cadastro caso não tenha o cadastro para ter acesso a mais conteúdos.
                            </p>
                        </nav>
                        <form onSubmit={this.efetuarCadastro}>
                            <div className="item">
                                <input className="input__cadastro" placeholder="nome de usuario" type="text"
                                name="email" id="cadastro__nome" onChange={this.mudarNome}
                                value={this.state.nome} />
                            </div>
                            <div className="item">
                                <input className="input__cadastro" placeholder="email" type="text"
                                name="username" id="cadastro__email" onChange={this.mudarEmail}
                                value={this.state.email} />
                            </div>
                            <div className="item">
                                <input className="input__cadastro" placeholder="senha" type="text"
                                name="password" id="cadastro__password" onChange={this.mudarSenha}
                                value={this.state.senha} />
                            </div>
                            <div className="item">
                                <button className="btn btn__cadastro" id="btn__cadastro" onClick={this.efetuarCadastro}>
                                    Cadastrar-Se
                                </button>
                            </div>
                            <p className="text__cadastro" style={{color: "red", textAlign: "center"}}
                            >
                                {this.state.erro}
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}