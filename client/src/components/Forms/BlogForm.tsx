import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Text } from '@mantine/core';
import TextEditor from './../TextEditor/index';
import Auth from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { postBlog, updateBlog } from '../../services/API/blog';
import { IBlogs } from './../../services/API/blog';

interface IProps {
  title?: string;
  description?: string;
  _id?: string;
}

const BlogForm = (props: IProps) => {
  const navigation = useNavigate();
  const [data, setData] = React.useState<string>(
    props?.description || '<h1>Blog Heading</h1><p>Write your blog here...</p>'
  );
  const blogForm = useForm({
    initialValues: {
      title: props?.title || '',
    },
    validate: {
      title: (value) => (value ? null : 'Title is required'),
    },
  });
  const BlogSubmitHandler = async (title: string) => {
    try {
      if (Auth && Auth?.isAuthenticated()) {
        const dataToUpload: IBlogs = {
          title,
          description: data,
          _id: props?._id || '',
          authorId: Auth?.getUser().userId,
          authorName: Auth?.getUser().userName,
        };
        const result = props?._id
          ? await updateBlog(dataToUpload)
          : await postBlog(dataToUpload);
        if (result?.message) throw Error();
        if (result) navigation(`/blog/${result?._id}`);
      } else navigation('/login');
    } catch (err) {
      throw err;
    }
  };

  return (
    <form
      className='grid gap-2'
      onSubmit={blogForm.onSubmit((values) => BlogSubmitHandler(values.title))}
    >
      <Text fw={600}>Title:</Text>
      <TextInput
        placeholder='Your Blog Title'
        {...blogForm.getInputProps('title')}
      />
      <Text fw={600}>Body:</Text>
      <TextEditor data={data} setData={setData} />
      <Button
        fw={700}
        className='bg-blue-500 w-full mt-2 text-lg'
        type='submit'
      >
        Post Blog
      </Button>
    </form>
  );
};

export default BlogForm;