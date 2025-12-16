import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="navbar">
          <div className="logo">
            <h1>HRT</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="home-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Bem-vindo ao Site HRT</h2>
            <p>Sua solução completa</p>
            <button className="cta-button">Saiba Mais</button>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 HRT. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
