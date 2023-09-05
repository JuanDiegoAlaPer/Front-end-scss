import React, { useState } from 'react';
import './Menu.scss';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-1295394_960_720.webp';

function Menu() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="container">
      <div className={`menu ${isMenuActive ? 'active' : ''}`}>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo UAM" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-icon">&#9776;</div>
          <span className="dropdown-icon">&#9660;</span>  
        </div>
        <div className={`dropdown-content ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="./components/flex/flex">Flexbox</a></li>
            <li><a href="./components/contacts/contacts">Contact</a></li>
            <li><a href="./components/products/products">Products</a></li>
          </ul>
        </div>
        <div className="avatar-container">
          <img src={avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
      <div className="content">
        <h1>Prueba</h1>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Menu;
