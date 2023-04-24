
const express = require("express");
require("dotenv").config();
const app = express();

// route
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
<<<<<<< HEAD
    .send(`HELLO AKSTYLES! ACKNOWLEDGE ME   !!!`);
=======
    .send(`HELLO AWS xxxxxxxxxxxx !!!`);
>>>>>>> 273696b37bd4ed2067218e58864257149880623e
});

// Listening to the port 
let PORT = process.env.PORT ? process.env.PORT : 8000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running...`);
});
