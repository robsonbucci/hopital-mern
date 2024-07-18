import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      dbName: 'hospital_lengthbar',
    });

    console.log('Connected');
    return conn;
  } catch (error) {
    console.error(`Error occured while connecting to database: ${error}`);
  }
};
