import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import Cart from './views/Cart';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Regisration from './components/Registration';

function App() {  
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }
  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product !== productToRemove))
  }
  const[page, setPage] = useState('Main')
  const pages = {
    Main: <Main addToCart={addToCart} />,
    Cart: <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
  }
  const[modalBox, setModalBox] = useState('none')
  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Regisration /></ModalBox>
  }
  return (
    <div className="App">
      <Header setPage={setPage} setModalBox={setModalBox}/>
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer />
    </div>
  );
}

export default App;