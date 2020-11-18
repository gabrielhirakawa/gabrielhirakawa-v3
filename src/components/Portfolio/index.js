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
import imgLOL from '../../assets/lol.png'
import imgGit from '../../assets/git.png'

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

            <DivPortfolioCard variants={item} >
              <img src={imgFavoDeMelArt} alt="favo-de-mel" />
              <span>Favo de Mel Artes</span>
            </DivPortfolioCard>


          <DivPortfolioCard variants={item}>
            <img src={imgLOL} alt="lol-api" />
            <span>LOL API</span>
          </DivPortfolioCard>
          <DivPortfolioCard variants={item}>
            <img src={imgGit} alt="git-repositories" />
            <span>GIT repositories</span>
          </DivPortfolioCard>
        </DivPortfolioCards>


      </DivPortfolioBox>


    </Container>
  );
}

export default Portfolio;
