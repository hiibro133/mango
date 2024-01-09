
import connectDB from '@/utils/db';
import Item from '@/models/Items';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
   const Items = await Item.find().sort({ date: -1 });
    res.status(200).json(Items);
  } else if (req.method === 'POST') {
    const { title, content, imageUrl } = req.body;
    const newItem = new Item ({ title, content, imageUrl});
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 