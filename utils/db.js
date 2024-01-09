import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  
    });
    console.log('MongoDB connected');
    //process.env.MONGODB_URI
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};
export default connectDB;