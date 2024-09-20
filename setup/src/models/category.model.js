const mongoose = require("mongoose");
const Scheam = mongoose.Schema;
const CategorySchema = new Schema({
  id: Number,
  name: String,
});
const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;
