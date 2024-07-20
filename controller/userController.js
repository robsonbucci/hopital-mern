import { catchAsyncErrors } from '../middlewares/catchAsyncErrors.js';
import ErrorHandler from '../middlewares/errorMiddleware.js';
import { User } from '../models/userSchema.js';

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  let { firstName, lastName, email, phone, cpf, dob, gender, password, role } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !cpf ||
    !dob ||
    !gender ||
    !password ||
    !role
  ) {
    return next(new ErrorHandler('Please fill full form', 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler('User already registered', 400));
  }
  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    cpf,
    dob,
    gender,
    password,
    role,
  });
  res.status(200).json({
    success: true,
    message: 'User registered!',
  });
});
