import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Parceria() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="vh-auto p-5 overflow-hidden d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#c5b59e" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* COLUNA ESQUERDA */}
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h1
              className="text-white mb-4"
              style={{ fontSize: "4.2rem", fontWeight: 500, lineHeight: 0.9 }}
            >
              Crescimento <br />
              compartilhado, <br />
              resultados reais
            </h1>
            <p className="fw-bold mb-3" style={{ color: "#000" }}>
              Acreditamos que grandes resultados surgem de parcerias sólidas e duradouras.
            </p>
            <p className="mb-4" style={{ color: "#333", maxWidth: "90%" }}>
              Com diversos empreendimentos lançados e parceiros atendidos, unimos
              credibilidade, segurança jurídica e expertise técnica para transformar
              terrenos e oportunidades em projetos de alto impacto.
            </p>
            <button
              className="rounded-5 px-4 py-2 border-0 bg-white fw-bold"
              style={{ width: "fit-content", color: "#0f172a" }}
            >
              Seja nosso parceiro
            </button>
          </div>

          {/* ESPAÇADOR/PONTOS (Opcional, igual à imagem) */}
          <div className="col-md-1 d-none d-md-flex flex-column align-items-center gap-2">
             <div style={{width: '10px', height: '10px', backgroundColor: '#0f172a', borderRadius: '50%'}}></div>
             <div style={{width: '10px', height: '10px', backgroundColor: 'rgba(15,23,42,0.3)', borderRadius: '50%'}}></div>
             <div style={{width: '10px', height: '10px', backgroundColor: 'rgba(15,23,42,0.3)', borderRadius: '50%'}}></div>
          </div>

          {/* COLUNA DIREITA (DROPDOWN) */}
          <div className="col-md-6">
            <h3
              className="mb-4"
              style={{ fontFamily: "Amandine", color: "#000", fontSize: "2.5rem", fontWeight: 700 }}
            >
              Seja nosso parceiro
            </h3>

            <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
              <AccordionTab header="Vantagens estratégicas para o crescimento">
                <p className="m-0" style={{ fontSize: "0.95rem", color: "#333" }}>
                  Cada parceria é guiada por segurança, transparência e credibilidade. 
                  Com rigor jurídico e estratégias que garantem valorização consistente, 
                  unimos marketing diferenciado, consultoria especializada e modelos 
                  flexíveis de participação para transformar potencial em resultados sólidos e duradouros.
                </p>
              </AccordionTab>

              <AccordionTab header="Suporte estratégico e condução de resultados">
                <p className="m-0">Conteúdo do suporte estratégico...</p>
              </AccordionTab>

              <AccordionTab header="Onde você pode investir">
                <p className="m-0">Informações sobre locais de investimento...</p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>

      <style>{`
        /* Reset de bordas e fundos do PrimeReact */
        .p-accordion .p-accordion-header .p-accordion-header-link {
            background: #0f172a !important; /* Azul escuro da imagem */
            color: #ffffff !important;
            border: none !important;
            padding: 1.25rem !important;
            border-radius: 32px !important;
            text-decoration: none !important;
            transition: border-radius 0.2s;
            font-weight: 600 !important;
            display: flex;
            flex-direction: row-reverse; /* Ícone na direita */
            justify-content: space-between;
        }

        /* Quando o tab está aberto, removemos o arredondamento de baixo do cabeçalho */
        .p-accordion .p-accordion-tab-active .p-accordion-header-link {
            border-radius: 12px 12px 0 0 !important;
        }

        /* Estilo do conteúdo (o fundo bege que fica "dentro" da borda preta) */
        .p-accordion .p-accordion-content {
            background-color: transparent !important;
            border: 1px solid #0f172a !important;
            border-top: none !important;
            border-radius: 0 0 12px 12px !important;
            padding: 1.5rem !important;
            color: #000 !important;
        }

        /* Espaçamento entre os itens */
        .p-accordion-tab {
            margin-bottom: 1rem !important;
            border: none !important;
        }

        /* Ajuste do ícone */
        .p-accordion-toggle-icon {
            font-size: 0.8rem !important;
        }

        /* Suas fontes */
        @font-face { font-family: 'Amandine'; src: url('../assets/fonts/Amandine.woff') format('woff'); }
        @font-face { font-family: 'Livvic'; src: url('../assets/fonts/Livvic.woff') format('woff'); }
        h1 { font-family: 'Amandine', serif; }
        p, .p-accordion-header-link { font-family: 'Livvic', sans-serif; }
      `}</style>
    </section>
  );
}