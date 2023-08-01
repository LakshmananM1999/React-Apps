const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/foodOrder");
  }
  main().catch((err) => console.log(err.message||err._message||''));

  const meals= [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const foodOrderSchem = new mongoose.Schema({
    meal: {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
      },
    },
  });

  const Meal = mongoose.model("meals", foodOrderSchem);

  meals.map(meal=>{
    
    Meal.create({
        meal:meal
    })
  })

