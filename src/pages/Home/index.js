import React from 'react';
// import { motion } from "framer-motion";
import ReactVivus from 'react-vivus';
import { Link } from 'react-router-dom';
import { ScrollTo } from "react-scroll-to";

import "./styles.css";
import { Container, DivHome, DivLogo, RevealBlockAnimation } from './styles';

import svg from '../../assets/logo-azul.svg'

function Home() {


  return <Container>

    <DivHome>
      <nav>
        <ul>
          <li>Home</li>
          <li><ScrollTo>
        {({ scroll }) => (
          <a onClick={() => scroll({ y: 500, smooth: true })}>Portfolio</a>
        )}
      </ScrollTo></li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>

      <DivLogo>
        <ReactVivus
          id="foo"
          option={{
            file: svg,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            // onReady: console.log
          }}
          style={{ height: '400px', width: '400px', color: '#16A596' }}
        // callback={console.log}
        />

        <RevealBlockAnimation>
          <h1>Gabriel <strong>Hirakawa</strong></h1>
          <h2>Desenvolvedor Fullstack</h2>
        </RevealBlockAnimation>
      </DivLogo>
      <span></span>
    </DivHome>
    <div >
      Portfolio
    </div>
  </Container>;
}

export default Home;