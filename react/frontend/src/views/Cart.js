import React from 'react';
import './Cart.css';

function Cart({cartItems, removeFromCart, setModalBox}) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
  function payOrder() {
    const cardNumber = document.getElementById('cardNumber').value
    const cardMonth = document.getElementById('cardMonth').value
    const cardYear = document.getElementById('cardYear').value
    const cvc = document.getElementById('cvc').value
    if (cardNumber.length===16 && (cardMonth>0 && cardMonth<13) &&
    (cardYear>24 && cardYear.length<3) && cvc.length===3) {
      window.alert('Заказ успешно оплачен!')
    }
    else {
      window.alert('Неверные данные карты')
    }
  }
  return (
    <div className="Cart">
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>) : (
          <div>
            {cartItems.map((item, id) => (
              <div key={id} className='cartItem' >
                <img src={item.image} alt=''></img>
                <h3>{item.header}</h3>
                <p>{item.price} руб.</p>
                <button onClick={() => removeFromCart(item)}>Удалить</button>
              </div>
            ))}
            <p>Всего: {totalPrice} руб.</p>
            <div id='order'>
              <h1>Введите свои данные</h1>
              <input id='cardNumber' type='number' placeholder='0000 0000 0000 0000' required></input>
              <div>
                <input id='cardMonth' type='number' placeholder='00' required></input><p>/</p>
                <input id='cardYear' type='number' placeholder='00' required></input>
                <input id='cvc' type='number' placeholder='000' required></input>
              </div>
              <button onClick={payOrder}>Оплатить</button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Cart;