import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;

  @media(max-width: 414px){
    padding-top: 80px;
  }
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
  background: #fff;
  border-radius: 8px;
  cursor: pointer;

  span{
    margin: 10px;
  }

  @media(max-width: 414px){
    height: 200px;
    width: 200px;
  }

  img{
    height: 120px;
  }

  &:hover{
    border: 4px solid #c3c3c3;
    /* -webkit-box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.1);
    box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.1); */
  }
`;
