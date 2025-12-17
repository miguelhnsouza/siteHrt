import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from 'primereact/chart';

export default function Graphic() {
    
    const chartData = {
        labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
        datasets: [
            {
                data: [0, 75, 50, 70, 60, 100, 90, 70, 50, 70, 55, 90],
                fill: false,
                borderColor: '#c6a96a', 
                tension: 0.1,
                borderDash: [5, 5],
                pointRadius: 0, 
            },
            {
                data: [0, 60, 40, 65, 50, 95, 80, 60, 45, 65, 50, 85],
                fill: false,
                borderColor: 'rgba(198, 169, 106, 0.4)',
                tension: 0.1,
                pointRadius: 0,
            }
        ]
    };

    // Opções de configuração do Chart.js
    const chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 3,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: 'rgba(255, 255, 255, 0.7)' }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25,
                    color: 'rgba(255, 255, 255, 0.7)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                }
            }
        },
        layout: {
            padding: 10
        }
    };

    // Estilos inline MÍNIMOS (cores de fundo e texto, tipografia)
    const containerStyle = {
        backgroundColor: '#0a0d18',
        color: '#f8f9fa',
        padding: '3rem 1.5rem',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1,
        fontFamily: 'Amandine, serif', 
    };

    const quoteTextStyle = {
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.8)',
    };

    const cfoNameStyle = {
        fontWeight: 600,
        color: '#f8f9fa',
    };

    return (
        <div style={containerStyle}>
            <div className="container">
                <div className="row align-items-center">
                    {/* COLUNA 1: Título e Crescimento Anual */}
                    <div className="col-md-12 w-auto mb-4 mb-lg-0">
                        <h2 style={headingStyle} className="mb-0">
                            Resultados <br /> que refletem <br /> o nosso <br /> crescimento <br /> anual
                        </h2>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-lg-0 justify-content-center align-items-center">
                        <div className="chart-container" style={{ height: 'auto', position: 'relative' }}>
                            <Chart type="line" data={chartData} options={chartOptions} />
                            
                            <div className="badge bg-light text-dark position-absolute top-0 start-50 translate-middle" style={{ marginTop: '-1rem', zIndex: 1, padding: '0.3rem 0.6rem', borderRadius: '15px' }}>
                                100%
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 3: Texto e CFO */}
                    <div className="w-auto col-md-12 text-md-start text-lg-start">
                        <p style={quoteTextStyle} className="mb-4">
                            Os resultados refletem a solidez de nossa estratégia e expansão sustentável do portfolio, mostrando crescimento anual, consistenta no mercado imobiliário.
                        </p>
                        <div className="d-flex align-items-center">
                            {/* Ícone de perfil simulado (PrimeIcons) */}
                            <i className="pi pi-user me-3 p-3 rounded-circle" style={{ fontSize: '1.5rem', backgroundColor: '#333', color: '#fff' }}></i>
                            <div>
                                <p className="mb-0" style={cfoNameStyle}>
                                    **Rodrigo Gazzoli**
                                </p>
                                <small style={quoteTextStyle}>Chief Financial Officer</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default SecaoResultados; // Removido, pois já está no 'export default function SecaoResultados()'