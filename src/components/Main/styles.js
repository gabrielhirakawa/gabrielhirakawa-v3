import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  div:after {
  }

  h1 {
    opacity: 0;
    font-size: 30px;
    animation: fadeInText 0s 1.1s both;
    font-weight: lighter;
    strong {
      font-weight: 600;
    }
  }
  h2 {
    font-weight: 600;
    background: linear-gradient(90deg, #16a596 0%, #7043ef 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInText 0s 1.1s both;
  }

  img {
    height: 230px;
  }

  @keyframes revealBlock {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes enlargeBlock {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes fadeInText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DivLogo = styled.div``;

export const RevealBlockAnimation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #16a596 0%, #7043ef 100%);
    transform: translateX(-100%);
    animation: enlargeBlock 0.5s 0.6s both, revealBlock 0.5s 1.1s both;
  }
`;
