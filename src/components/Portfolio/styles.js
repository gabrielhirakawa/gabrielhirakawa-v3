import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding-top: 50px; */
  min-height: 100vh;


`;

export const DivPortfolioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 350px;
  padding: 10px;
  background: linear-gradient(270deg, #16a596 0%, #7043ef 100%);
  border-radius: 8px;

  @media(max-width: 414px){
    /* margin-top: 50px; */
    width: 80%;
  }
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
  flex-direction: column;
  color: #3c3c3c;
  height: 240px;
  width: 240px;
  margin: 10px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #3c3c3c;
  }

  img{
    max-width: 200px;
  }

  span{
    margin: 10px;
    text-align: center;
  }

  @media(max-width: 414px){

    height: 140px;
    width: 140px;
  }

  img{
    height: 100px;
    @media(max-width: 414px){
    height: 60px;
    width: 60px;
  }
  }

  &:hover{
    border: 4px solid #c3c3c3;

  }
`;
