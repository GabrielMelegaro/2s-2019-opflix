import React, { Component } from 'react';
import Axios from "axios";
import Rodape from '../../Components/Rodape';
import Titulo from '../../Components/Titulo';
import {  Link  } from 'react-router-dom';

export default class Lancamento extends Component{
    constructor(){
        super();
        this.state = {
            lista: [
            ],
            Titulo: "",
            Sinopse: "",
            Duracao: "",
            Categoria: "",
            Tipo: "",
            dataLanc: "",
            Plataforma: "",
        }
    }
    
    componentDidMount(){
        this.listarLancamentos();
        // this.cadastrarLancamentos();
    }

    Titulo = (event) => {
        this.setState({titulo: event.target.value})
    }

    Sinopse = (event) => {
        this.setState({sinopse: event.target.value})
    }
    
    Duracao = (event) => {
        this.setState({duracao: event.target.value})
    }
    
    Categoria = (event) => {
        this.setState({categoria: event.target.value})
    }
    
    Tipo = (event) => {
        this.setState({tipo: event.target.value})
    }
    
    dataLanc = (event) => {
        this.setState({dataLanc: event.target.value})
    }

    Plataforma = (event) => {
        this.setState({plataforma: event.target.value})
    }


    // listarLancamentos = () =>{
    //     Axios.get('http://localhost:5000/api/lancamentos')
    //         .then(response => response.json())
    //         .then(data => this.setState({lista: data}));
    // }
    listarLancamentos = () => {

        Axios.get("http://localhost:5000/api/lancamentos", {
        })
            .then(Response => {
                this.setState({ lista: Response.data })
            })
        }

    cadastrarLancamentos = (event) => {
        event.preventDefault();

        Axios.post('http://localhost:5000/api/lancamentos',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.titulo }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => this.listarLancamentos())
            .catch(erro => console.log(erro));
    }

    nomeLancamento = (event) =>{
        this.setState({titulo: event.target.value})
        console.log(this.state);
    }
    render(){
        return(
            
            <body>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <nav className="cabecalhoPrincipal-nav">
                    <Link to='/'>Home</Link>
                    <Link to='/lancamentos'>Lancamentos</Link>
                    <Link to='/categorias'>Categorias</Link>
                    <Link to='/plataformas'>Plataformas</Link>
                    <Link to='/cadastro'>Cadastre-Se</Link>
                    <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
                    <h1>OPFLIX</h1>
                    </nav>
                    </div>
                </header>
            <main className="conteudoPrincipal">
                <section className="conteudoPrincipal-lancamento">
                    <div className="container" id="conteudoPrincipal-listar">
                        <table className="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Titulo</th>
                                    <th>Sinopse</th>
                                    <th>Duracao</th>
                                    <th>Categoria</th>
                                    <th>Tipo</th>
                                    <th>DataLanc</th>
                                    <th>Plataforma</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {this.state.lista.map(element => {
                                    return(
                                        <tr key = {element.IdLancamento}>
                                            <td>{element.idLancamento}</td>
                                            <td>{element.titulo}</td>
                                            <td>{element.idSinopseNavigation.descricao}</td>
                                            <td>{element.duracao}</td>
                                            <td>{element.idCategoriaNavigation.nome}</td>
                                            <td>{element.idTipoNavigation.estilo}</td>
                                            <td>{element.dataLancamento}</td>
                                            <td>{element.idPlataformaNavigation.nome}</td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
                <section className="conteudoPrincipal-lancamento">
                    <form onSubmit={this.cadastrarLancamentos}>
                        <div className="item">
                            <input className="input__lancamento" placeholder="Titulo" type="text" name="titulo"
                            id="lancamento__titulo" onChange={this.Titulo} value={this.state.titulo} />
                        </div>
                        <div className="item">
                            <input className="input__lancamento" placeholder="Sinopse" type="text" name="sinopse"
                            id="lancamento__sinopse" onChange={this.Sinopse} value={this.state.sinopse} />
                        </div>
                        <div className="item">
                            <input className="input__lancamento" placeholder="Duracao" type="text" name="duracao"
                            id="lancamento__duracao" onChange={this.Duracao} value={this.state.duracao} />
                        </div>
                        <div className="item">
                            <input className="input__lancamento" placeholder="Categoria" type="text" name="categoria"
                            id="lancamento__categoria" onChange={this.Categoria} value={this.state.categoria} />
                        </div>
                        <div className="item">
                            <input className="input__lancamento" placeholder="Tipo" type="text" name="tipo"
                            id="lancamento__tipo" onChange={this.Tipo} value={this.state.tipo} />
                        </div>
                        <div className="item">
                            <input className="input__lancamento" placeholder="DataLanc" type="date" name="dataLanc"
                            id="lancamento__dataLanc" onChange={this.dataLanc} value={this.state.dataLanc} />
                        </div>
                        <div className="item">
                            <input className="input__lancamento" placeholder="Plataforma" type="text" name="plataforma"
                            id="lancamento__plataforma" onChange={this.Plataforma} value={this.state.plataforma} />
                        </div>
                        <div className="item">
                                <button className="btn btn__login" id="btn__login">
                                    Cadastrar
                                </button>
                        </div>
                    </form>
                </section>
            <Rodape/>
            </body>
        )
    }
}
