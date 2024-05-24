const catchAsyncError = require("../middleware/catchAsyncError");
const subCategoryModel = require("../models/sabCategoryModels");
const ErrorHander = require("../utils/errorHander");
// const ErrorHander = require("../middleware/error")

exports.createSubCategory = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const subcategory = await subCategoryModel.create(req.body);
  res.status(201).json({
    success: true,
    subcategory,
  });
});
exports.getAllSubCategory = catchAsyncError(async (req, res, next) => {
  // req.body.user = req.user.id;
  const categoryId = req.params.categoryId;
  const getsubcategory = await subCategoryModel.find({ categoryId });
  res.status(201).json({
    success: true,
    getsubcategory,
  });
});
exports.deleteSubCategory = catchAsyncError(async (req, res, next) => {
  const subcategory = await subCategoryModel.findByIdAndDelete(req.params.id);
  if (!subcategory) {
    return next(new ErrorHander("sub Category not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "sub Category deleted",
  });
});



exports.updateSubCategory = catchAsyncError(async (req, res, next) => {
  let Subcategory = await subCategoryModel.findById(req.params.id);
  if (!Subcategory) {
    return next(new ErrorHander("privacy Policy not found", 404));
  }
  Subcategory = await subCategoryModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(200).json({
    success: true,
    Subcategory,
  });
});