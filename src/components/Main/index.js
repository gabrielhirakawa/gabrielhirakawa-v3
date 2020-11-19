import React from 'react';
import ReactVivus from 'react-vivus';
import { FaArrowDown } from 'react-icons/fa'

import { Container, DivLogo, RevealBlockAnimation } from './styles';
import svg from '../../assets/logo-azul.svg';

function Main() {
  return (
    <Container id="main">
      <span></span>
      <DivLogo>
        <ReactVivus
          id="foo"
          option={{
            file: svg,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
          }}
          style={{ height: '350px', width: '350px', color: '#16A596' }}
        />

        <RevealBlockAnimation>
          <h1>
            Gabriel <strong>Hirakawa</strong>
          </h1>
          <h2>Desenvolvedor Fullstack</h2>
        </RevealBlockAnimation>
      </DivLogo>
      <nav className="arrow-portfolio">
        <a href="#portfolio"><FaArrowDown size={28} color="#fff" /></a>
      </nav>
    </Container>
  );
}

export default Main;
