import React from "react";
import {  Link  } from 'react-router-dom';

function Navegacao(){
    return(
        <nav className="cabecalhoPrincipal">
            <section className="cabecalhoPrincipal-nav">
          <Link to='/'>Home</Link>
          <Link to='/lancamentos'>Lancamentos</Link>
          <Link to='/categorias'>Categorias</Link>
          <Link to='/plataformas'>Plataformas</Link>
          <Link to='/cadastro'>Cadastre-Se</Link>
            </section>
        </nav>
    );
}
export default Navegacao;