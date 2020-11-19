import styled from 'styled-components';
import bg from '../../assets/bg2.jpeg'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;

  /* @media(max-width: 414px){
    padding: 50px;
    min-height: auto;
  } */

  background: linear-gradient(180deg, #262527 0%, rgba(38, 37, 39, 0.96) 100%), url(${bg}) center no-repeat;
  background-size: contain, cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2{
    text-transform: uppercase;
    color: #16A596;
  }
`;


export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 420px;

  input, textarea, button{
    text-align: center;
    margin: 10px;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    width: 100%;
  }
  textarea{
    height: 80px;
  }

  button{
    color: #fff;
    background-color: #16A596;
  }

  @media(max-width: 414px){
    width: 320px;
  }
`;

