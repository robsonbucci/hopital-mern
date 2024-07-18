import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minLength: [3, 'First Name Must Contain At least 3 Characters.'],
  },
  lastname: {
    type: String,
    required: true,
    minLength: [3, 'Last Name Must Contain At least 3 Characters.'],
  },
  firstname: {
    type: String,
    required: true,
    minLength: [validator.isEmail, 'Please, Provide A Valid Email.'],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, 'Phone Number Must Contain At least 11 Characters.'],
    maxLength: [16, 'Phone Number Must Contain Max 16 Characters.'],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, 'Message Must Contain At least 10 Characters.'],
  },
});

export const Message = mongoose.model('Message', messageSchema);
