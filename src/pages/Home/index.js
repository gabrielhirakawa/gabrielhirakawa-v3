import React from 'react';

import { Container, Content, RevealBlockAnimation } from './styles';

import logo from '../../assets/logo.png'

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
        <img src={logo} alt="logo" />
        <RevealBlockAnimation>
            <h1>Gabriel <strong>Hirakawa</strong></h1>
            <h2>Desenvolvedor Fullstack</h2>
        </RevealBlockAnimation>
        
      </Content>
      <span></span>
  </Container>;
}

export default Home;