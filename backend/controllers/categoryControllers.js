const ErrorHander = require("../Utils/errorhander");
const catchAsyncError = require("../middleware/catchAsyncError");
const Features = require("../utils/features");
const CategoryModel = require("../models/CategoryModels");

// create Category
exports.createCategory = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const newCategory = await CategoryModel.create(req.body);
  console.log(newCategory, "ffff");
  res.status(201).json({
    success: true,
    newCategory,
  });
});
// get all Category
exports.getAllCategory = catchAsyncError(async (req, res, next) => {
  const categoryCount = await CategoryModel.countDocuments();
  // const resultPerPage = 4;
  const apiFeature = new Features(CategoryModel.find(), req.query)
    .search()
    .filter()
    // .pagination(resultPerPage);
  const categories = await apiFeature.query;
  if (!categories) {
    return next(new ErrorHander("Category not found", 404));
  }
  res.status(200).json({
    success: true,
    categories,
    categoryCount,
  });
});
// update Category
exports.updateCategory = catchAsyncError(async (req, res, next) => {
  let category = await CategoryModel.findById(req.params.id);
  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }
  category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    category,
  });
});
exports.deleteCategory = catchAsyncError(async (req, res, next) => {
  const category = await CategoryModel.findByIdAndDelete(req.params.id);
  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Category deleted",
  });
});

// get AlCategory Details
// exports.getCategoryDetails = catchAsyncError(async (req, res, next) => {
//     const category = await CategoryModel.findById(req.params.id);
//     if (!category) {
//         return next(new ErrorHander("Category not found", 404));
//     }
//     res.status(200).json({
//         success: true,
//         category
//     });
// });
