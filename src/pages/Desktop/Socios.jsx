import React, { useState, useEffect } from "react";
import "./Socios.css";
import imgRodrigo from "../../assets/RODRIGO.png";
import imgThales from "../../assets/THALES.png";

const members = [
  {
    id: 1,
    name: "Thales Cícero",
    role: "Chief Executive Officer",
    img: imgThales,
    bio: "Com mais de 20 anos de experiência no setor, Irrigo lidera a estratégia de crescimento e inovação da empresa."
  },
  {
    id: 2,
    name: "Rodrigo Gazzoli",
    role: "Chief Executive Officer",
    img: imgRodrigo,
    bio: "Rodrigo é responsável pela operação e relacionamento com parceiros, focado em eficiência e qualidade."
  },
  {
    id: 3,
    name: "Hamilton Silva",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
    bio: "Hamilton conduz o time de design com ênfase em experiência do usuário e soluções sustentáveis."
  },
];

export default function Socios() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % members.length), 20000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + members.length) % members.length);
  const next = () => setIndex((i) => (i + 1) % members.length);

  return (
    <section className="socios-section">
      <div className="container-lg">
        <div className="socios-inner">
        <div className="carousel-area">
          <div className="socios-carousel">
            <div className="gradient gradient-left" aria-hidden />
            <button className="s-arrow left" onClick={prev} aria-label="Anterior">‹</button>

            <div className="s-track">
              {members.map((m, i) => {
                const pos = (i - index + members.length) % members.length;
                const cls = pos === 0 ? 's-card s-center' : pos === 1 ? 's-card s-right' : pos === members.length - 1 ? 's-card s-left' : 's-card s-hidden';
                return (
                  <article className={cls} key={m.id}>
                    <div className="s-media" style={{ backgroundImage: `url(${m.img})` }} />
                    <div className="s-body">
                      <strong>{m.name}</strong>
                      <span>{m.role}</span>
                    </div>
                  </article>
                );
              })}
            </div>

            <button className="s-arrow right" onClick={next} aria-label="Próximo">›</button>
            <div className="gradient gradient-right" aria-hidden />
          </div>

        </div>

        <div className="text-area">
          {members[index] && (
            <>
              <h2>{members[index].name}</h2>
              <p className="role">{members[index].role}</p>
              <p className="bio">{members[index].bio}</p>
              <button className="btn-primary">Conheça mais</button>
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
