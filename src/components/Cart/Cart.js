import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props)=>{

    const cartCtx = useContext(CartContext);
    const items = cartCtx.items;

  


    const cartItems =  <ul className={classes['cart-items']}>
          { items.map((item) => {
            
            return (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.title}</span>
                <span>${(item.price * item.amount).toFixed(2)}</span>
              </li>
            );
            
          })}
        </ul>;

    

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span> Total Amount</span>
                <span>${cartCtx.totalPrice}</span>
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

