import React from 'react';

import {
  Container,
  DivPortfolioBox,
  DivPortfolioCard,
  DivPortfolioCards,
} from './styles';

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
          <DivPortfolioCard variants={item}></DivPortfolioCard>
          <DivPortfolioCard variants={item}></DivPortfolioCard>
          <DivPortfolioCard variants={item}></DivPortfolioCard>
        </DivPortfolioCards>
      </DivPortfolioBox>
    </Container>
  );
}

export default Portfolio;
