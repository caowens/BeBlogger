import React from 'react';
import { Title, Grid, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import BlogCard from '../components/BlogCard';
import MainWrapper from '../components/Wrapper/MainWrapper';
import { getBlogs } from '../services/API/blog';
import LoadingCard from './../components/LoadingCard/index';

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [err, setErr] = React.useState<boolean>(false);
  const [blogs, setBlogs] = React.useState<any[]>();
  React.useEffect(() => {
    const asyncFun = async () => {
      try {
        const result = await getBlogs();
        if (result) setIsLoading(false);
        setBlogs(result);
      } catch (err: any) {
        setErr(true);
      }
    };
    asyncFun();
  }, []);
  if (err) throw Error;
  return (
    <MainWrapper>
      {isLoading ? (
        <LoadingCard />
      ) : (
        <>
          <Title>
            Todays<span className='text-blue-400 mx-1'>Latest Blogs</span>.
          </Title>
          <Grid className='mt-4' gutter='sm'>
            {blogs &&
              blogs?.map((item) => {
                return (
                  <Grid.Col key={item._id}>
                    <BlogCard
                      _id={item._id}
                      title={item.title}
                      date={item.createdAt}
                      author={item.authorName}
                    />
                  </Grid.Col>
                );
              })}
          </Grid>
        </>
      )}
    </MainWrapper>
  );
};

export default HomePage;