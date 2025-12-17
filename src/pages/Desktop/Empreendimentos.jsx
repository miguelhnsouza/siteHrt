import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Opcional: para navegação interna
import imgGrandHill from '../../assets/img-grandhill.png';
import imgBeachPub from '../../assets/img-beachpub.png';
import imgPortal2 from '../../assets/img-portal2.png';

const listaEmpreendimentos = [
    {
        id: 1,
        nome: "Portal do Lago",
        descricao: "Lazer elevado, investimento inteligente.",
        imagem: imgPortal2,
        rota: "/portal-do-lago"
    },
    {
        id: 2,
        nome: "Grand Hill Residence Resort",
        descricao: "O maior complexo náutico da região.",
        imagem: imgGrandHill,
        rota: "/grand-hill-residence"
    },
    {
        id: 3,
        nome: "Grand Hill Beach Pub",
        descricao: "Um oásis gastronômico.",
        imagem: imgBeachPub,
        rota: "/grand-hill-beach-pub"
    }
];

export default function Empreendimentos() {
    const navigate = useNavigate();

    return (
        <section className="py-5" style={{ backgroundColor: '#fdfdfd' }}>
            <div className="container">
                {/* Título da Seção */}
                <div className="text-center mb-5">
                    <h2 style={{ 
                        fontFamily: 'Livvic, serif', 
                        fontSize: '2.5rem', 
                        color: '#06243c',
                        fontWeight: '500' 
                    }}>
                        Empreendimentos
                    </h2>
                </div>

                <div className="row g-4 justify-content-center">
                    {listaEmpreendimentos.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 col-lg-4">
                            {/* Card clicável */}
                            <div 
                                onClick={() => navigate(item.rota)}
                                className="h-100 border-0 bg-transparent card-hover-effect"
                                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                            >
                                <div style={{ 
                                    height: '550px', 
                                    overflow: 'hidden', 
                                    borderRadius: '5px',
                                    marginBottom: '20px'
                                }}>
                                    <img 
                                        src={item.imagem} 
                                        alt={item.nome}
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="img-zoom"
                                    />
                                </div>

                                <div className="text-center">
                                    <h3 style={{ 
                                        fontFamily: 'Amandine, serif', 
                                        fontWeight: 600,
                                        fontSize: '1.4rem', 
                                        color: '#06243c',
                                        marginBottom: '5px' 
                                    }}>
                                        {item.nome}
                                    </h3>
                                    <p style={{ 
                                        fontSize: '0.85rem', 
                                        color: '#7a8792',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {item.descricao}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .card-hover-effect:hover {
                    transform: translateY(-5px);
                }
                .card-hover-effect:hover .img-zoom {
                    transform: scale(1.01);
                }
                @font-face {
                    font-family: 'Amandine'; /* Simulação da fonte elegante usada */
                    src: local('serif');
                }
            `}</style>
        </section>
    );
}