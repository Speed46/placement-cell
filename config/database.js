const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    // .connect(process.env.MONGODB_URL, {
   .connect(`mongodb+srv://bollapragadakousik46:w5ylyanGAtr1YdPz@cluster0.5ns7wou.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB CONNECTED SUCCESSFULLY"))
    .catch((err) => {
      console.log("DB CONNECTION FAILED");
      console.log(err);
      process.exit(1);
    });
};