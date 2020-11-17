import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
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

