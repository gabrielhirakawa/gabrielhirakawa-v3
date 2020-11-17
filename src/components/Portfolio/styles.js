import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`;

export const DivPortfolioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 400px;
  padding: 10px;
  background: linear-gradient(270deg, #16a596 0%, #7043ef 100%);
  border-radius: 8px;
`;

export const DivPortfolioCards = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const DivPortfolioCard = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  width: 240px;
  margin: 10px;
  background: #fff;
  border-radius: 8px;
`;
