const ErrorHandler = require("../utils/errorHander");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const sendToken = require("../utils/jwtToken");

// Register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 201, res);
});

// Login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }

  const token = user.getJWTToken();

  res.status(201).json({
    user,
    success: true,
    token,
  });
});

// Logout user
exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    Message: "Logged out",
  });
});

// Reset password
// exports.forgotPassword = catchAsyncError(async (req, res, next) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     return next(new ErrorHandler("User not found", 404));
//   }

//   // Get reset password token
//   const resetToken = user.getResetPasswordToken();
//   await user.save({ validateBeforeSave: false });
//   const resetPasswordLink = `${req.protocol}://${req.get(
//     "host"
//   )}/api/v1/password/reset/${resetToken}`;
//   const Message = `Your password reset link :- \n\n${resetPasswordLink}`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: "Password recovery",
//       message: Message,
//     });

//     res.status(200).json({
//       success: true,
//       Message: `Email sent to ${user.email}`,
//     });
//   } catch (error) {
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;
//     await user.save({ validateBeforeSave: false });
//     return next(new ErrorHandler(error.Message, 500));
//   }
// });

// exports.resetPass = catchAsyncError(async (req, res, next) => {
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.token)
//     .digest("hex");

//   const user = await User.findOne({
//     resetPasswordToken,
//     resetPasswordExpire: { $gt: Date.now() },
//   });

//   if (!user) {
//     return next(new ErrorHandler("Reset password token has expired", 404));
//   }

//   if (req.body.password !== req.body.confirmedPassword) {
//     return next(new ErrorHandler("Passwords do not match", 400));
//   }

//   user.password = req.body.password;
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;
//   await user.save();

//   res.status(200).json({
//     success: true,
//     Message: "Password reset successful",
//   });
// });

exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  console.log(user, "llddd");
  res.status(200).json({
    success: true,
    user,
  });
});
