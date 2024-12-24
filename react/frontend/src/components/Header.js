import React from 'react';
import './Header.css';
import UserBox from './UserBox'

function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
      <button onClick={() => setPage('Main')}>Главная</button>
      <button onClick={() => setPage('Cart')}>Корзина</button>
      <UserBox setModalBox={setModalBox}/>
    </div>
  );
}

export default Header;