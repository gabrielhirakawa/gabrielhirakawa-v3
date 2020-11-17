import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: linear-gradient(90deg, #16a596 0%, #7043ef 100%);
  top: 0;
  z-index: 100;
  ul {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 15px;

    li {
      margin: 0 10px;
      font-weight: 500px;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        &:hover {
          color: #262527;
        }
      }

      @media(max-width: 414px){
        font-size: 14px;
        margin: 0 5px;
      }
    }
  }
`;
