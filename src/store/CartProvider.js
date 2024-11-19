import {  useState } from 'react';

import CartContext from './cart-context';



const CartProvider = (props) => {
  const [items,updateItems] = useState([]);
  const [totalAmount,setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCartHandler = (itemTobeAdded) => {

    setTotalAmount((amount)=>parseInt(amount)+parseInt(itemTobeAdded.amount));

    updateItems((prevItems)=>{
      const existingItemIndex = prevItems.findIndex(item => item.id === itemTobeAdded.id);
      const updatedItems = [...prevItems];

      if (existingItemIndex !== -1) {
          
        updatedItems[existingItemIndex].amount = itemTobeAdded.amount;
      } else {
        updatedItems.push(itemTobeAdded);
      }
      return updatedItems;
    })

    setTotalPrice((price)=>{
      let updatedPrice = parseFloat(price) + parseFloat(itemTobeAdded.amount * itemTobeAdded.price);
      return updatedPrice.toFixed(2);
    })

  };

  const removeItemFromCartHandler = (id) => {
    
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    totalPrice: totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;