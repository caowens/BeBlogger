import React from 'react';
import { Container, Text, Title, Divider, Button, Flex } from '@mantine/core';
import { Icon } from '@iconify/react';

import MainWrapper from '../../components/Wrapper/MainWrapper';
import BlogCard from './../../components/BlogCard/index';
import { getBlogsByUser } from './../../services/API/blog';
import Auth from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { deleteUserAPI } from '../../services/API/login';

const ProfilePage = () => {
  const navigator = useNavigate();
  const [blogs, setBlogs] = React.useState<any[]>();
  const [reload, setReload] = React.useState<boolean>(false);

  React.useEffect(() => {
    const asyncFun = async () => {
      try {
        const result = await getBlogsByUser(Auth && Auth.getUser()?.userId);
        setBlogs(result as any[]);
      } catch (err) {}
    };
    asyncFun();
  }, [reload]);
  const logOutHandler = () => {
    Auth && Auth.logOut();
    navigator('/');
  };
  const reloadHandler = () => {
    setReload(!reload);
  };
  const deleteHandler = () => {
    deleteUserAPI(Auth?.getUser()?.userId)
      .then((data) => {
        if (data) {
          logOutHandler();
        }
      })
      .catch((e) => navigator('/error'));
  };
  return (
    <MainWrapper>
      <Container>
        <Title order={1} className='text-6xl'>
          {Auth && Auth.getUser()?.userName}{' '}
          <span className='text-blue-600'>Blog's</span>
        </Title>
        <Text className='text-gray-600'>
          User Id: {Auth && Auth.getUser()?.userId}
        </Text>
        {/* MENU */}
        <Flex className='mt-4' gap='md'>
          <Button
            onClick={() => navigator('/create-blog')}
            leftIcon={
              <Icon
                icon='material-symbols:add-circle-outline-rounded'
                width='20'
                height='20'
              />
            }
            className='bg-blue-500  hover:bg-blue-700'
          >
            Create Blog
          </Button>
          <Button
            onClick={reloadHandler}
            leftIcon={<Icon icon='tabler:reload' width='20' height='20' />}
            className='bg-purple-500  hover:bg-purple-700'
          >
            Reload Blogs
          </Button>
          <Button
            onClick={logOutHandler}
            leftIcon={<Icon icon='ph:sign-out-bold' width='20' height='20' />}
            className='bg-red-500  hover:bg-red-700'
          >
            LogOut
          </Button>
        </Flex>
        {/* BLOGS */}
        <>
          <div className='mt-10'>
            <Title className='text-center' fw={400} order={2}>
              My Blogs
            </Title>
            <Divider my='lg' variant='dashed' />
          </div>
          <div className='rounded p-2 bg-gray-200'>
            {blogs?.length ? (
              blogs?.map((data) => (
                <div className='bg-white my-2' key={data?._id}>
                  <BlogCard
                    _id={data?._id}
                    title={data?.title}
                    date={data?.createdAt}
                    author={data?.authorName}
                    edit
                  />
                </div>
              ))
            ) : (
              <Title
                order={4}
                fw={700}
                className='text-center text-gray-800 py-2 border border-gray-500 border-dashed '
              >
                No Blogs Found
              </Title>
            )}
          </div>
        </>
        <Divider my='lg' />

        <Button
          onDoubleClick={deleteHandler}
          leftIcon={
            <Icon
              icon='material-symbols:delete-outline'
              width='20'
              height='20'
            />
          }
          className=' text-red-500 hover:bg-red-100  bg-red-50'
        >
          Double Click To Delete Account
        </Button>
      </Container>
    </MainWrapper>
  );
};

export default ProfilePage;