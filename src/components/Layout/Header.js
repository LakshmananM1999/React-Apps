import { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodie</h1>
        <HeaderCartButton click = {props.click}/>
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="Food" />
      </div>
    </Fragment>
  )
};

export default Header;
