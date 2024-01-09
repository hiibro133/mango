import mongoose from 'mongoose';

let Item;

try {
  // Check if the model is already defined
  Item = mongoose.model('Item');
} catch {
  // Define the model if it doesn't exist
  const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true }, // Add this line for image URL
   // date: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
  });

  Item = mongoose.model('Item', ItemSchema);
}

export default Item;