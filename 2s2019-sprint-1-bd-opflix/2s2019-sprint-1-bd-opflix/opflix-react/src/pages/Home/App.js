import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/coringa.png';
import logo1 from '../../assets/img/pexels-photo-802055(modified).jpg'

function App() {
  return (
    <div className="App">
      <div>
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
      <section className="conteudoImagem">
        <div>
          <img src={logo1} />
          <h3>O melhor lugar para encontrar Filmes/Series de sua preferência!</h3>
        </div>
      </section>

      <section className="conteudoDestaque">
        <div>
          <h1>Destaques</h1>
          <ul className="conteudoSecundario-dados">
                <li className="conteudoPrincipal-dados-link destaques">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>
                <li className="conteudoPrincipal-dados-link destaques">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>
                <li className="conteudoPrincipal-dados-link destaques">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>
                <li className="conteudoPrincipal-dados-link destaques">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>

                </ul>
        </div>
      </section>

      {/* <main className="conteudo_principal">
        <section id="conteudoPrincipal-lancamento">
          <h1 id="conteudoPrincipal-lancamento-titulo">Lancamentos</h1>
          <div className="container">
            <nav>
              <ul className="conteudoPrincipal-dados">
                <li className="conteudoPrincipal-dados-link lancamentos">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>
                <li className="conteudoPrincipal-dados-link lancamentos">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>
                <li className="conteudoPrincipal-dados-link lancamentos">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>
                <li className="conteudoPrincipal-dados-link lancamentos">
                  <h3>Lorem Ipsum</h3>
                  <img src={logo} />
                  <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum v Lorem IpsumLorem IpsumLorem IpsumLorem 
                    IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </li>

              </ul>
            </nav>
          </div>
        </section>
      </main> */}
      <footer className="rodapePrincipal">
            <h1>Contatos</h1>
        <section className="rodapePrincipal-proprio">
        <div className="container">
            <p>Tel.:
                (11)99999-9999
                9999-9999
            </p>
            <p>
                Redes Sociais
                Instagram - @OpFlixOfficial
                Facebook - @OpFlixOfficial
                Twitter - @OpFlixOfficial
            </p>
        </div>
        </section>
        </footer>
      </div>
    </div>

  );
}

export default App;
