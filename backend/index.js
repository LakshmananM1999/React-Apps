const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/foodOrder");

  // This is for redux
  // await mongoose.connect("mongodb://localhost:27017/reduxCart");
}
main().catch((err) => console.log(err.message));

//This Schema is for reduxCart management without context API

// const reduxCartSchema = new mongoose.Schema({
// items:{
//   type : Object
// },
// totalAmount:{
//   type : Number
// }
// })

// const ReduxCartItem = mongoose.model("reduxCartItems",reduxCartSchema)

const foodOrderSchema = new mongoose.Schema({
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

const cartSchema = new mongoose.Schema({
  userData: {
    type: Object,
  },
  orderedItems: {
    type: Object,
  },
});

const Meal = mongoose.model("meals", foodOrderSchema);
const CartItem = mongoose.model("cartItems", cartSchema);



app.get("/", async (req, res) => {
  const result = await Meal.find({});
  res.send(result).status(200);
});

app.post("/", async (req, res) => {
  const result = await CartItem.create({
    userData: req.body.userData,
    orderedItems: req.body.orderedItems,
  });
  res.send(result);
  console.log(result);
});

//This path is for ReduxCart

// app.post("/redux",async (req,res)=>{
  
//   const result = await ReduxCartItem.create({
//     items:req.body.items,
//     totalAmount:req.body.totalAmount
//   }
//   );
//    res.send(result)
//   console.log(result);
// }
 
// )

app.listen(5000, () => {
  console.log("Server on port 5000");
});
