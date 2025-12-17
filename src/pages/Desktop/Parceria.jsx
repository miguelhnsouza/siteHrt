import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Parceria() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerStyle = {
        backgroundColor: '#c5b59e',
        color: '#ffffff',
        padding: '5rem 0',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
    };

    const titleStyle = {
        fontFamily: 'serif',
        fontSize: '4rem',
        lineHeight: '1',
        fontWeight: '300',
        color: '#ffffff',
        marginBottom: '2rem'
    };

    const textStyle = {
        fontSize: '0.95rem',
        color: '#333333',
        maxWidth: '450px'
    };

    const buttonStyle = {
        backgroundColor: '#ffffff',
        color: '#0a0d18',
        borderRadius: '50px',
        padding: '12px 35px',
        border: 'none',
        fontWeight: '600',
        marginTop: '2rem'
    };

    const accordionHeaderStyle = {
        backgroundColor: '#0a0d18',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        marginBottom: '10px'
    };

    return (
        <section style={containerStyle}>
            <div className="">
                <div className="row align-items-start">
                    
                    {/* COLUNA ESQUERDA: Textos e Botão */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h1 style={titleStyle}>
                            Crescimento <br />
                            compartilhado, <br />
                            resultados reais
                        </h1>
                        <p className="fw-bold mb-3" style={{ color: '#000' }}>
                            Acreditamos que grandes resultados surgem de parcerias sólidas e duradouras.
                        </p>
                        <p style={textStyle}>
                            Com diversos empreendimentos lançados e parceiros atendidos, unimos credibilidade, 
                            segurança jurídica e expertise técnica para transformar terrenos e oportunidades 
                            em projetos de alto impacto, gerando crescimento e valorização para todos os envolvidos.
                        </p>
                        <button style={buttonStyle}>Seja nosso parceiro</button>
                    </div>

                    {/* COLUNA CENTRAL: Paginação (Simulada) */}
                    <div className="col-lg-1 d-none d-lg-flex flex-column align-items-center justify-content-center pt-5">
                        <div className="rounded-circle mb-2" style={{width: '8px', height: '8px', backgroundColor: '#000'}}></div>
                        <div className="rounded-circle mb-2" style={{width: '8px', height: '8px', backgroundColor: 'rgba(0,0,0,0.2)'}}></div>
                        <div className="rounded-circle mb-2" style={{width: '8px', height: '8px', backgroundColor: 'rgba(0,0,0,0.2)'}}></div>
                        <div className="rounded-circle" style={{width: '8px', height: '8px', backgroundColor: 'rgba(0,0,0,0.2)'}}></div>
                    </div>

                    <div className="col-lg-6 h-100">
                        <h3 className="mb-4" style={{ fontFamily: 'serif', color: '#000', fontSize: '2rem' }}>
                            Seja nosso parceiro
                        </h3>
                        
                        <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                            <AccordionTab header="Vantagens estratégicas para o crescimento">
                                <p className="m-0 text-dark text-decoration-none" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                                    Cada parceria é guiada por segurança, transparência e credibilidade. 
                                    Com rigor jurídico e estratégias que garantem valorização consistente, 
                                    unimos marketing diferenciado, consultoria especializada e modelos 
                                    flexíveis de participação para transformar potencial em resultados sólidos e duradouros.
                                </p>
                            </AccordionTab>
                            
                            <AccordionTab header="Suporte estratégico e condução de resultados">
                                <p className="m-0 text-dark">
                                    Conteúdo do suporte estratégico aqui...
                                </p>
                            </AccordionTab>
                            
                            <AccordionTab header="Onde você pode investir">
                                <p className="m-0 text-dark">
                                    Informações sobre locais de investimento...
                                </p>
                            </AccordionTab>
                        </Accordion>
                    </div>

                </div>
            </div>

            <style>{`
                .p-accordion .p-accordion-header .p-accordion-header-link {
                    background-color: #0a1120 !important;
                    color: white !important;
                    border: none !important;
                    padding: 1.2rem 2.5rem 1.2rem 1.2rem !important;
                    border-radius: 25px !important;
                    font-size: 0.95rem !important;
                    font-weight: 600 !important;
                    text-decoration: none !important;
                }
                .p-accordion .p-accordion-tab {
                    margin-bottom: 10px !important;
                    border: 1px solid #0a1120 !important;
                    border-radius: 30px !important;
                    overflow: hidden;
                }
                .p-accordion .p-accordion-content {
                    background-color: transparent !important;
                    border: none !important;
                    color: #333 !important;
                    padding: 1.5rem !important;
                }
                .p-accordion-header-icon {
                    order: 1; /* Coloca o ícone na direita */
                    margin-left: auto;
                }
            `}</style>
        </section>
    );
}