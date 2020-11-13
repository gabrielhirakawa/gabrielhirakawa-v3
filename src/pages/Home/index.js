import React from 'react';
// import { motion } from "framer-motion";
import ReactVivus from 'react-vivus';
import "./styles.css";
import { Container, Content, RevealBlockAnimation } from './styles';
import svg from '../../assets/logo-hira.svg'

function Home() {


  return <Container>
    <nav>
      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
    <Content>

      <ReactVivus
        id="foo"
        option={{
          file: svg,
          animTimingFunction: 'EASE',
          type: 'oneByOne',
          onReady: console.log
        }}
        style={{ height: '400px', width: '400px', color: '#16A596' }}
        callback={console.log}
      />

      <RevealBlockAnimation>
        <h1>Gabriel <strong>Hirakawa</strong></h1>
        <h2>Desenvolvedor Fullstack</h2>
      </RevealBlockAnimation>

    </Content>
    <span></span>
  </Container>;
}

export default Home;