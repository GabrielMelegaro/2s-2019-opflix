import React, { Component } from 'react';
import Axios from 'axios';
import {  Link  } from 'react-router-dom';
import Rodape from '../../Components/Rodape';
import Navegacao from '../../Components/Navegacao';

export default class Plataforma extends Component{
    constructor(){
        super();
        this.state={
            lista: [
            ],
            nome: ""
        }
    }

    componentDidMount(){
        this.listarPlataformas();
    }

    listarPlataformas = () =>{
        fetch('http://localhost:5000/api/plataformas')
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
    }

    cadastrarPlataforma = (event) =>{
        event.preventDefault();

        Axios('http://localhost:5000/api/plataformas',{
            method: "POST",
            body: JSON.stringify({ nome: this.state.nome }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => this.listarPlataformas())
            .catch(erro => console.log(erro));
    }

    nomePlataforma = (event) =>{
        this.setState({nome: event.target.value})
        console.log(this.state);
    }

    render(){
        return(
            <body>    
            <div>
            <header className="cabecalhoPrincipal">
                <Navegacao />
                <h1>Plataformas</h1>
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
                                <tr key = {element.idPlataforma}>
                                    <td>{element.idPlataforma}</td>
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