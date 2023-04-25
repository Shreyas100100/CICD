
const express = require("express");
require("dotenv").config();
const app = express();

// route
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
<<<<<<< HEAD
    .send(`HELLO AKSTYLES!!!`);
=======
    .send(`HELLO Sir! atharva this side !`);
>>>>>>> 45822196815ebffe3f3d6e849abd94df37156d38
});

// Listening to the port 
let PORT = process.env.PORT ? process.env.PORT : 8000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
