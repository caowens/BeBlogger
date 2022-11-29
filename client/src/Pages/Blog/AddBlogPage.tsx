import { Link } from 'react-router-dom';
import { Text, Flex, Box, Title } from '@mantine/core';

import MainWrapper from '../../components/Wrapper/MainWrapper';
import BlogForm from '../../components/Forms/BlogForm';

const AddBlogPage = () => {
  return (
    <MainWrapper>
      <Box className='max-w-xl grid gap-4 mx-auto'>
        <Title>
          Your<span className='text-blue-400 mx-1'>Blog Start's</span>here.
        </Title>
        <BlogForm />
      </Box>
    </MainWrapper>
  );
};

export default AddBlogPage;