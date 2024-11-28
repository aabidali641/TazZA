const mongoose = require("mongoose");
const initData = require("./data.js");
const Product = require("../models/product.js");

main()
  .then(() => {
    console.log("Connected To DataBase Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Tazza");
}

const initDB = async () => {
  await Product.deleteMany({});
  
  await Product.insertMany(initData.data);
  console.log("data was initilized");
};

initDB();
