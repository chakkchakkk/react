import React from 'react';
import './Product.css';

function Product({header, image, price, addToCart}) {
  const product = {header, image, price}
  return (
    <div className="Product">
      <img src={image} alt='' />
      <h2>{header}</h2>
      <p>{`${price} руб.`}</p>
      <button onClick={() => addToCart(product)}>В корзину</button>
    </div>
  );
}

export default Product;