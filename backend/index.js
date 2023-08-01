const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser =require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

main().catch(err => console.log(err.message));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/notesApp');
}

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("notes", notesSchema);

app.get("/",async(req,res)=>{
    const result = await Note.find({});
    res.send(result).status(200);
})

app.post("/", async (req, res) => {
  const result= await Note.create({ title: req.body.title, content: req.body.content });
  res.send(result);
  console.log(result);
});

app.delete("/:id",async(req,res)=>{
    const result = await Note.deleteOne({_id:req.params.id});
    res.send(result).status(200);
})

app.listen(5000);