import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgEficiencia from '../../assets/eficiencia.jpg';
import imgPatrimonio from '../../assets/patrimonio.png';
import imgExperiencia from '../../assets/experiencia.png';
import imgRentabilidade from '../../assets/rentabilidade.png';

const abasData = [
    { 
        id: 'inovacao', 
        label: 'INOVAÇÃO', 
        imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070', // Substitua pelas suas fotos
        texto: 'Projetos que antecipam o futuro da construção.' 
    },
    { 
        id: 'eficiencia', 
        label: 'EFICIÊNCIA', 
        imagem: imgEficiencia,
        texto: 'Processos otimizados para máxima entrega.'
    },
    { 
        id: 'rentabilidade', 
        label: 'RENTABILIDADE', 
        imagem: imgRentabilidade,
        texto: 'Segurança e alto retorno para seu capital.'
    },
    { 
        id: 'liquidez', 
        label: 'LIQUIDEZ', 
        imagem: imgPatrimonio,
        texto: 'Patrimônio com alta demanda de mercado.'
    },
    { 
        id: 'experiencia', 
        label: 'EXPERIÊNCIA', 
        imagem: imgExperiencia,
        texto: 'Projetos que acompanham o seu estilo de vida.'
    }
];

export default function Section4() {
    const [abaAtiva, setAbaAtiva] = useState(abasData[4]);

    return (
        <section style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
            <div className="container py-4">
                <ul className="nav justify-content-center border-0 gap-4 gap-md-5">
                    {abasData.map((aba) => (
                        <li key={aba.id} className="nav-item">
                            <button
                                onClick={() => setAbaAtiva(aba)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: '10px 0',
                                    fontSize: '0.9rem',
                                    letterSpacing: '2px',
                                    fontWeight: abaAtiva.id === aba.id ? '700' : '300',
                                    color: '#06243c',
                                    fontFamily: 'Livvic, sans-serif',
                                    // borderBottom: abaAtiva.id === aba.id ? '2px solid #06243c' : '0px solid transparent',
                                    border: 0,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                            >
                                {aba.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div 
                style={{
                    height: '50vh',
                    width: '100%',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${abaAtiva.imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-image 0.8s ease-in-out', 
                    position: 'relative'
                }}
            >
                <div className="text-center px-4">
                    <h2 style={{
                        color: '#fff',
                        fontFamily: 'Livvic, serif',
                        fontSize: '2rem',
                        fontWeight: '300',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        maxWidth: '800px'
                    }}>
                        {abaAtiva.texto}
                    </h2>
                </div>
            </div>
        </section>
    );
}