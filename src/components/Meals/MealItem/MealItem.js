import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props)=>{

    const price = `$${props.price.toFixed(2)}`;


    return (
        <li  className={classes.meal}>

            <div className={classes.description}>
                <h3>
                    {props.title}
                </h3>
                {props.description}
            </div>

            <div className={classes.price}>
                {price}
            </div>
        </li>

    )

}

export default MealItem;