const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
  categoryId: {
    type:String,
  },
  SubcategoryTitle: {
    type: String,
    required: [true, "Please Enter subcategorytitle"],
  },
  description: {
    type: String,
    required: [true, "Please Enter description"],
  },
  image: {
    type: String,
    // required: [true, "Please upload Image"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("subCategoryModel", subCategorySchema);
