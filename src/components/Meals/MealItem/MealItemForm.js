import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef= useRef();

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum= +enteredAmount;

    props.onAddCart(enteredAmountNum);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_"+ props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+</button>
    </form>
  );
};

export default MealItemForm;
