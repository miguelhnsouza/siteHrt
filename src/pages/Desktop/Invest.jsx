import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./invest.css";

const RIGHT_CARDS = [
  { id: 1, title: 'Por que investir com a HRT?', content: ['Solidez e credibilidade no mercado imobiliário',] },
  { id: 2, title: 'Investimentos que respeitam o futuro', content: ['Projetos pensados para gerar impacto positivo',] },
  { id: 3, title: 'Estratégia com foco no amanhã', content: ['Eficiência construtiva',] },
  { id: 4, title: 'Gestão transparente', content: ['Relatórios periódicos',] },
  { id: 5, title: 'Risco controlado', content: ['Due diligence rigorosa',] },
  { id: 6, title: 'Portfólio diversificado', content: ['Residencial', 'Comercial', 'Logística'] },
  { id: 7, title: 'Sustentabilidade', content: ['Materiais eco-friendly',] },
  { id: 8, title: 'Retorno consistente', content: ['Modelos financeiros conservadores',] },
  { id: 9, title: 'Atendimento dedicado', content: ['Equipe de relacionamento',] }
];

export default function Invest() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  // Dimensions used to compute translate in px (kept in JS to avoid complex css-calc)
  const CARD_H = 120; // px
  const GAP = 16; // px
  const VISIBLE = 3; // number of visible stacked cards

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % RIGHT_CARDS.length);
    }, 5000);
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const up = () => setActive((a) => (a - 1 + RIGHT_CARDS.length) % RIGHT_CARDS.length);
  const down = () => setActive((a) => (a + 1) % RIGHT_CARDS.length);

  return (
    <section className="invest-section py-5" id="invest">
      <div className="container">
        <div className="row align-items-center">

          {/* Coluna esquerda */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="invest-title">
              Invista no futuro com
              <br />
              segurança e inovação
            </h2>

            <p className="invest-text mt-3">
              Construímos valor com solidez, inovação e uma visão de longo prazo
              que transforma investimentos em conquistas duradouras.
            </p>

            <p className="invest-text">
              Seja um investidor e faça parte de projetos que unem
              credibilidade, crescimento e futuro, criando oportunidades
              seguras e sustentáveis.
            </p>

            <button className="btn btn-dark rounded-pill px-4 py-2 mt-3">
              Seja um investidor
            </button>
          </div>

          {/* Coluna direita - carrossel vertical */}
          <div className="col-lg-7">
            <div className="invest-carousel d-flex gap-3 align-items-start">
              <div className="carousel-dots d-flex flex-column align-items-center" aria-hidden>
                {Array.from({ length: VISIBLE }).map((_, i) => (
                  <span key={i} className="dot" />
                ))}
              </div>

              <div className="carousel-controls d-flex flex-column align-items-start">
                <button className="btn btn-sm btn-outline-secondary mb-2" onClick={up} aria-label="Anterior">▲</button>

                <div
                  className="carousel-viewport"
                  onMouseEnter={stopAutoplay}
                  onMouseLeave={startAutoplay}
                  style={{ height: VISIBLE * CARD_H + (VISIBLE - 1) * GAP }}
                >
                  <div
                    className="carousel-stack"
                    style={{ transform: `translateY(-${active * (CARD_H + GAP)}px)` }}
                  >
                    {RIGHT_CARDS.map((c) => (
                      <article className="invest-card mb-3" key={c.id} style={{ height: CARD_H }}>
                        <div className="card-left" aria-hidden />
                        <div className="invest-card-content">
                          <h5>{c.title}</h5>
                          {Array.isArray(c.content) ? (
                            <ul>
                              {c.content.map((li, idx) => (
                                <li key={idx}>{li}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{c.content}</p>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <button className="btn btn-sm btn-outline-secondary mt-2" onClick={down} aria-label="Próximo">▼</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
