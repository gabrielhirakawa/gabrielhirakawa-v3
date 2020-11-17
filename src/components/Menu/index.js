import React from 'react';

import { Nav } from './styles';

function Menu() {
  return (
    <Nav className="menu">
      <ul>
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </Nav>
  );
}

export default Menu;
