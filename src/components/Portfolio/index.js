import React from 'react';
// import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
// import { openSpring, closeSpring } from "./animations";

import {
  Container,
  DivPortfolioBox,
  DivPortfolioCard,
  DivPortfolioCards,
} from './styles';

import imgFavoDeMelArt from '../../assets/favo.png'
import imgLOL from '../../assets/bardo.png'
import imgRifas from '../../assets/rifas.svg'

function Portfolio() {


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container id="portfolio">
      <DivPortfolioBox>
        <h2>PORTFOLIO</h2>
        <DivPortfolioCards
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          <DivPortfolioCard variants={item}>
            <a href="https://rifas.netlify.app/"
            rel="noopener noreferrer"
            target="_blank">
              <img src={imgRifas} alt="favo-de-mel" />
              <span>Rifas.com</span>
            </a>
          </DivPortfolioCard>


          <DivPortfolioCard variants={item}>
          <a href="https://bardo.netlify.app/"
          rel="noopener noreferrer"
          target="_blank">
            <img src={imgLOL} alt="lol-api" />
            <span>Bardo.gg</span>
          </a>
          </DivPortfolioCard>
          <DivPortfolioCard variants={item}>
          <a href="https://favodemel.netlify.app/"
          rel="noopener noreferrer"
          target="_blank">
            <img src={imgFavoDeMelArt} alt="favo de mel" />
            <span>Favo de mel</span>
            </a>
          </DivPortfolioCard>
        </DivPortfolioCards>


      </DivPortfolioBox>


    </Container>
  );
}

export default Portfolio;
