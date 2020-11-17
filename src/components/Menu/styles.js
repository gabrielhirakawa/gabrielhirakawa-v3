import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  //background-color: #262527;
  width: 100%;
  // background-color: rgba(22,165,150, 0.5);
  background: linear-gradient(90deg, #16a596 0%, #7043ef 100%);
  top: 0;
  z-index: 100;
  ul {
    display: flex;
    padding: 0;
    text-align: center;
    justify-content: center;
    padding: 15px;

    li {
      margin: 0 10px;
      font-size: 16px;
      font-weight: 500px;
      text-transform: uppercase;
      a {
        padding: 10px 20px;
        text-decoration: none;
        color: white;
        &:hover {
          color: #262527;
          //background-color: rgba(0,0,0, 0.2);
          //font-weight: bold;
        }
      }
    }
  }
`;
