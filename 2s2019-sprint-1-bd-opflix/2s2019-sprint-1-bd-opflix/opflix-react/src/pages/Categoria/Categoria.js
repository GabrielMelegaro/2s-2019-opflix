import React, {Component} from "react";
import {  Link  } from 'react-router-dom';

import logo from '../../assets/img/pexels-photo-802055(modified).jpg';
import Rodape from '../../Components/Rodape';
import Navegacao from "../../Components/Navegacao";
import Axios from "axios";

export default class Categoria extends Component{
    constructor(){
        super();
        this.state = {
            lista: [
            ],
            nome: ""
        }
    }

    componentDidMount(){
        this.listarCategorias();
    }

    listarCategorias = () =>{
        fetch('http://localhost:5000/api/categorias')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }

    cadastrarCategoria = (event) =>{
        event.preventDefault();

        Axios('http://localhost:5000/api/categorias', {
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => this.listarCategorias())
            .catch(erro => console.log(erro));
    }

    nomeCategoria = (event) =>{
        this.setStatee({nome: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
            <body>    
            <div>
            <header className="cabecalhoPrincipal">
                <Navegacao />
                <h1>Categorias</h1>
            </header>
        </div>

        <main className="conteudoPrincipal">
            <section className="conteudoPrincipal-listar">
                <div className="container" id="conteudoPrincipal-listar">
                    <table className="tabela-lista">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                        </tr>
                    </thead>

                    <tbody id="tabela-lista-corpo">
                        {this.state.lista.map(element => {
                            return(
                                <tr key = {element.idCategoria}>
                                    <td>{element.idCategoria}</td>
                                    <td>{element.nome}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>
                </div>
            </section>
        </main>

        <Rodape />
    </body>
        );
    }
}