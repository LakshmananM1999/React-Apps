import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props =>{
    const current = useContext(CartContext);
    const numberOfItems = current.items.reduce((currNum,item)=>{
        return currNum+item.amount;
    },0);
    return(
        <button onClick={props.click} className={classes.button}>
            <span>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;