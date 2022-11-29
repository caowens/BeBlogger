import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, Flex, Box, Title } from '@mantine/core';

import MainWrapper from '../../components/Wrapper/MainWrapper';
import BlogForm from '../../components/Forms/BlogForm';
import { getBlogByID, IBlogs } from '../../services/API/blog';

const EditBlogPage = () => {
  let { id } = useParams();
  const [Data, setData] = React.useState<IBlogs>();
  const [err, setErr] = React.useState<boolean>(false);

  React.useEffect(() => {
    const asyncFun = async () => {
      try {
        if (!id) throw new Error();
        const result = id && (await getBlogByID(id as string));
        setData(result as IBlogs);
      } catch (err) {
        setErr(true);
      }
    };
    asyncFun();
  }, []);
  if (err) throw Error;
  return (
    <MainWrapper>
      <Box className='max-w-xl grid gap-4 mx-auto'>
        <Title>
          Edit<span className='text-blue-400 mx-1'>Blog</span>.
        </Title>
        {Data && (
          <BlogForm
            title={Data?.title}
            description={Data?.description}
            _id={Data?._id}
          />
        )}
      </Box>
    </MainWrapper>
  );
};

export default EditBlogPage;