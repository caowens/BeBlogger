import { axiosInstance } from '../../config/axiosConnection';

export interface IBlogs {
  _id?: string;
  authorId: string;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: Date;
  authorName: string;
}

export const getBlogs = async () => {
  try {
    const blogs = await axiosInstance.get('/blog');
    return blogs.data as IBlogs[];
  } catch (err) {
    throw err;
  }
};
export const getBlogByID = async (_id: string) => {
  try {
    const blogs = await axiosInstance.post('/blog/id', {
      _id,
    });
    return blogs.data as IBlogs;
  } catch (err) {
    throw err;
  }
};
export const getBlogsByUser = async (_id: string) => {
  try {
    const blogs = await axiosInstance.post('/blog/user', {
      _id,
    });
    return blogs.data as IBlogs[];
  } catch (err) {
    throw err;
  }
};
export const deleteBlogsByID = async (_id: string) => {
  try {
    const blogs = await axiosInstance.delete('/blog', { data: { _id } });
    return blogs.data;
  } catch (err) {
    throw err;
  }
};
export const postBlog = async (data: IBlogs) => {
  try {
    const blogs = await axiosInstance.post('/blog', data);
    return blogs.data;
  } catch (err) {
    throw err;
  }
};
export const updateBlog = async (data: IBlogs) => {
  try {
    const blogs = await axiosInstance.put('/blog', data);
    return blogs.data;
  } catch (err) {
    throw err;
  }
};