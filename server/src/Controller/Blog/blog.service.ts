import blogModel from '../../Models/Blog';

export interface IBlogs {
  authorId: String;
  title: String;
  description: String;
  createdAt?: String;
  updatedAt?: Date;
  authorName: String;
}
export const addBlog = async (blogs: IBlogs) => {
  try {
    const newBlogs = new blogModel(blogs);
    const result = await newBlogs.save();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const deleteBlog = async (_id: string) => {
  try {
    const result = blogModel.findByIdAndDelete(_id);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const updateBlog = async (
  _id: string,
  title: string,
  description: string
) => {
  try {
    const updatedAt = Date.now();
    const blog = await blogModel.findById(_id);
    const update = await blogModel.findByIdAndUpdate(
      _id,
      {
        _id,
        title,
        description,
        updatedAt,
        createdAt: blog?.createdAt,
        authorId: blog?.authorId,
        authorName: blog?.authorName,
      },
      {
        new: true,
      }
    );
    await update?.save();
    const result = await blogModel.findById(_id);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const getBlogs = async () => {
  try {
    const result = await blogModel.find().sort({ createdAt: 'desc' });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const getBlogsById = async (_id?: string) => {
  try {
    const result = await blogModel.findById(_id);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
export const getBlogsByUserId = async (_id?: string) => {
  try {
    const result = await blogModel
      .find({ authorId: _id })
      .sort({ createdAt: 'desc' });
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
