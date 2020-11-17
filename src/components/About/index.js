import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa'

import { Container, Content, Column, SvgList } from './styles';
import foto from '../../assets/foto.png';

function About() {
  return <Container id="sobre">
    <Content>
      <Column>
        <h2>Sobre</h2>
        <p>23 anos, desenvolvedor e apaixonado por <strong>tecnologia</strong>.</p>
        <h3>Stack:</h3>
        <ul>
          <li>- Node Js</li>
          <li>- React Js</li>
          <li>- React Native</li>
        </ul>
      </Column>
      <Column>
        <img src={foto} alt="foto" />
        <SvgList>
          <li><FaGithub size={30} color=" #16A596" /></li>
          <li><FaLinkedin size={30} color=" #16A596" /></li>
          <li><FaYoutube size={30} color=" #16A596" /></li>
        </SvgList>
      </Column>
    </Content>
  </Container>;
}

export default About;
