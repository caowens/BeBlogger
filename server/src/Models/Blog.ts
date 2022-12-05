import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  authorId: mongoose.Types.ObjectId,
  authorName: String,
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
});

const blogModel = mongoose.model('blogs', BlogSchema);

export default blogModel;
