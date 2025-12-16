import React, { useState, useEffect } from "react";
import "./styleCarousel.css";

const cardsData = [
  {
    id: 1,
    title: "Grand Hill Residence Resort",
    subtitle:
      "Em uma área de $28.000m^2$, o Grand Hill Residence Resort redefine o conceito de viver com exclusividade. Com 298 unidades cuidadosamente projetadas e vistas deslumbrantes da represa de Jaguara, este empreendimento oferece uma experiência única que combina sofisticação, natureza e infraestrutura náutica de primeira classe.",
    image:
      "https://axvliw1bcpyx.objectstorage.sa-vinhedo-1.oci.customer-oci.com/n/axvliw1bcpyx/b/ksi/o/198/foto_edificio_/2025/8271/sacramento--grand-hill-residente-resort-12-03-2025_18-04-09-2.jpg",
  },
  {
    id: 2,
    title: "Grand Hill Beach Pub",
    subtitle:
      "Em uma área de $28.000m^2$, o Grand Hill Residence Resort redefine o conceito de viver com exclusividade. Com 298 unidades cuidadosamente projetadas e vistas deslumbrantes da represa de Jaguara, este empreendimento oferece uma experiência única que combina sofisticação, natureza e infraestrutura náutica de primeira classe.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuq81nOdSWHTq-DA7kdDAuyI8Q1-16UKyWmA&s",
  },
  {
    id: 3,
    title: "Portal do Lago",
    subtitle:
      "Em uma área de $28.000m^2$, o Grand Hill Residence Resort redefine o conceito de viver com exclusividade. Com 298 unidades cuidadosamente projetadas e vistas deslumbrantes da represa de Jaguara, este empreendimento oferece uma experiência única que combina sofisticação, natureza e infraestrutura náutica de primeira classe.",
    image:
      "https://portaldolago2jaguara.com.br/wp-content/webp-express/webp-images/uploads/2024/04/localizacao.jpg.webp",
  },
  {
    id: 4,
    title: "Walk Easy Calçados",
    subtitle:
      "Em uma área de $28.000m^2$, o Grand Hill Residence Resort redefine o conceito de viver com exclusividade. Com 298 unidades cuidadosamente projetadas e vistas deslumbrantes da represa de Jaguara, este empreendimento oferece uma experiência única que combina sofisticação, natureza e infraestrutura náutica de primeira classe.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsoSssatlFMon1E69MN1x28m4O8L0aqqUWQ&s",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % cardsData.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + cardsData.length) % cardsData.length);
  const next = () => setIndex((i) => (i + 1) % cardsData.length);

  return (
    <section className="carousel-section container-lg vh-100">
      <div>
        <h2 className="carousel-title">Nossos empreendimentos</h2>
        <p className="carousel-sub">
          O compromisso é entregar alto padrão com eficiência e transparência.
        </p>
      </div>
      <div className="carousel-wrapper">
        <button
          className="carousel-arrow left"
          onClick={prev}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className="carousel-track">
          {cardsData.map((card, i) => {
            const pos = (i - index + cardsData.length) % cardsData.length;
            // pos 0 = center, pos 1 = right, pos last = left
            const cls =
              pos === 0
                ? "card card-center"
                : pos === 1
                ? "card card-right"
                : pos === cardsData.length - 1
                ? "card card-left"
                : "card card-hidden";
            return (
              <article className={cls} key={card.id}>
                <div
                  className="card-media h-75"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="card-body h-25">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            );
          })}
        </div>

        <button
          className="carousel-arrow right"
          onClick={next}
          aria-label="Próximo"
        >
          ›
        </button>
      </div>

      <div className="carousel-controls">
        {cardsData.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir para ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
