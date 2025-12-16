import React from "react";
import "./EstiloHrt.css";
import logo from "../../assets/logo-hrt.png";

export default function EstiloHrt() {
  return (
    <section className="estilo-section container-lg">
      <div className="estilo-grid">
        <div className="estilo-left">
          <h2>Seu jeito de viver, traduzido em cada projeto</h2>
          <p>
            O Estilo HRT traduz a forma como nossos empreendimentos se
            conectam ao dia a dia das pessoas, oferecendo espaços planejados
            para diferentes perfis de moradores. Mais do que imóveis,
            criamos experiências de vida que valorizam conforto, praticidade
            e bem-estar.
          </p>
          <button className="btn-ghost">Fale com um consultor</button>

          <div className="empreendimentos">
            <h4>Nossos empreendimentos</h4>
            <div className="logos">
              <img src={logo} alt="HRT" />
            </div>
          </div>
        </div>

        <div className="estilo-center">
          <div className="photo-card">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=80"
              alt="Casal"
            />
          </div>
        </div>

        <div className="estilo-right">
          <div className="info">
            <h5>Projetos que se adaptam ao seu estilo de vida</h5>
            <p>
              Nossos empreendimentos foram pensados para acolher diferentes
              estilos de vida. Seja casal de idosos, família com filhos, casal
              de namorados ou pessoa solteira, cada perfil encontra espaços
              que atendem suas necessidades com conforto e praticidade.
            </p>
          </div>

          <div className="info">
            <h5>Transformamos conceito em realidade</h5>
            <p>
              Cada projeto nasce de uma visão clara: transformar ideias em
              espaços que geram qualidade de vida. O que começa como conceito
              ganha forma em empreendimentos que unem inovação e bem-estar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
