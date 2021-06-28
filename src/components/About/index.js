import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa'

import { Container, Content, Column, SvgList } from './styles';
import foto from '../../assets/foto-perfil.jpeg';

function About() {
  return <Container id="sobre">
    <Content>
      <Column>
        <h2>Sobre</h2>
        <p>24 anos, desenvolvedor frontend e apaixonado por <strong>tecnologia</strong>.</p>
        <h3>Stack:</h3>
        <ul>
          <li>- Node Js (Express, Nest)</li>
          <li>- React Js (CRA, Next.js, Gatsby)</li>
          <li>- React Native</li>
          <li>- Photoshop, Figma</li>
          <li>- MongoDB, PostgreSQL</li>
        </ul>
      </Column>
      <Column>
        <img src={foto} alt="foto" />
        <SvgList>
          <li><a href="https://github.com/gabrielhirakawa" target="__blank"  ><FaGithub size={30} color=" #16A596" /></a></li>
          <li><a href="https://br.linkedin.com/in/gabrielhirakawa" target="__blank"><FaLinkedin size={30} color=" #16A596" /></a></li>
          <li><a href="https://youtube.com/gabrielhirakawa" target="__blank"><FaYoutube size={30} color=" #16A596" /></a></li>
        </SvgList>
      </Column>
    </Content>
  </Container>;
}

export default About;
