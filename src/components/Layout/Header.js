import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props)=>{


    return (
        <>

            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
        
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="table full of food"></img>
            </div>

            

            
        
        </>

    )

}

export default Header;