import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';
import { Container } from './styles';

import Menu from '../../components/Menu';
import Main from '../../components/Main';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';

import { menuScroll } from '../../helpers/effects';

function Home() {
  useEffect(() => {
    menuScroll();
  }, []);

  return (
    <Container>
      <Menu />
      <Main />
      <Portfolio />
      <About />
      <Contact />
    </Container>
  );
}

export default Home;
