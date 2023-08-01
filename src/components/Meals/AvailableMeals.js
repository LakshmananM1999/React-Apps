import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals,setMeals] = useState([]);

  const getRecords = useCallback( async () => {
    const response = await fetch(`http://localhost:5000/`);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const records = await response.json();
    setMeals(records);
    console.log(records);
    
    
  },[]);
  useEffect( ()=>{
    console.log("hi")
    getRecords();
    return;
  },[getRecords]
  )
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meals) => (
            <MealItem
              id={meals.meal.id}
              key={meals.meal.id}
              name={meals.meal.name}
              description={meals.meal.description}
              price={meals.meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
