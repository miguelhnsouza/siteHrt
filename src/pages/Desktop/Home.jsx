import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Carousel from './Carousel';
import EstiloHrt from './EstiloHrt';
import Socios from './Socios';
import Invest from './Invest';
import Graphic from './Graphic';
import Parceria from './Parceria copy';
import Empreendimentos from './Empreendimentos';
import Section4 from './Section4';
import InvistaComHrt from './InvistaComHrt';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Empreendimentos />
      <Socios />
      <Section4 />
      <InvistaComHrt />
      {/* <Carousel />
      <EstiloHrt />
      <Invest />
      <Graphic />
      <Parceria /> */}
    </>
  );
}

export default Home;
