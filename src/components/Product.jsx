import React, { useState, useContext } from "react";
import { CartDispatchContext, addToCart } from "../contexts/cart";

const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useContext(CartDispatchContext);
  const { image, name, price, id, stock } = data;

  const handleAddToCart = () => {
    const product = { ...data, quantity: qty };
    addToCart(dispatch, product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  let incNum =()=>{
    if(qty<10)
    {
      setQty(Number(qty)+1);
    }
  };
  let decNum = () => {
     if(qty>1)
     {
      setQty(qty - 1);
     }
  }
 let handleChange = (e)=>{
  setQty(e.target.value);
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price}</p>
      <div className="stepper-input">
        <a href="#" className="decrement" onClick={decNum}>–</a>
        <input type="number" className="quantity" value={qty} onChange={handleChange} />
        <a href="#" className="increment" onClick={incNum}>+</a>
      </div>
      <div className="product-action">
        <button
          className={!isAdded ? "" : "added"}
          type="button"
          onClick={handleAddToCart}
        >
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
