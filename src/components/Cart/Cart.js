import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props)=>{

    const cartCtx = useContext(CartContext);

    console.log(" From Cart " +  JSON.stringify(cartCtx));


    const cartItems = (
        <ul className={classes['cart-items']}>
          {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount</span>
                <span>{cartCtx.totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button 
                  className={classes["button--alt"]}
                  onClick={props.onClose}
                  >
                    Close
                  </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

}

export default Cart;

