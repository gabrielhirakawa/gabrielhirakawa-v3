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
  width: 60%;
  justify-content: center;
 text-align: left;

  @media(max-width: 414px){
    flex-direction: column;
    align-items: center;
    width: 80%;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  h2{
      text-transform: uppercase;
      color: #16A596;
    }
  h3{
    width: 100%;
    margin-top: 20px;
  }

  ul{
    width: 100%;
  }

  ul li{
    margin: 5px 0px;
  }

  img{
    height: 250px;
    width: 250px;
  }

  @media(max-width: 414px){
    align-items: center;
  }
`;

export const SvgList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    cursor: pointer;
    margin: 10px;
    &:hover{
      color: #7043EF !important;
    }
  }

`;
