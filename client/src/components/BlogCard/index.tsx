import React, { ReactNode } from 'react';
import { Container, Flex, Text, Button, Notification } from '@mantine/core';
import { getDateShort } from '../../config/global';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { deleteBlogsByID } from '../../services/API/blog';

interface IProp {
  _id: string;
  title: string;
  date: string;
  author: string;
  edit?: boolean;
}

const BlogCard = (props: IProp) => {
  const [notification, setNotification] = React.useState<ReactNode>();
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/blog/${props?._id}`);
  };
  const onEditHandler = () => {
    navigate(`/edit-blog/${props?._id}`);
  };
  const onDeleteHandler = async () => {
    try {
      const result: any = await deleteBlogsByID(props?._id);
      if (result?.message)
        return setNotification(
          <Notification title='Delete Failed'>{result?.message}</Notification>
        );
      else {
        setNotification(
          <Notification title='Delete Successfully'>
            Blog is deleted.
          </Notification>
        );
      }
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <Container className=' text-gray-800 border-2 border-gray-200 rounded my-1 py-2  cursor-pointer select-none hover:border-blue-300 hover:bg-blue-50 bg:shadow hover:text-blue-800'>
        <Flex onClick={onClickHandler}>
          <Text className='mt-1 font-semibold text-lg leading-tight max-w-lg lg:max-w-3xl  truncate'>
            {props.title}
          </Text>
        </Flex>
        <Flex onClick={onClickHandler} justify='space-between' mt='xs'>
          <Text className=' text-right right-3 text-blue-600 text-xs'>
            Author: {props.author}
          </Text>
          <Text className=' text-right right-3 text-gray-400 text-xs'>
            {getDateShort(props.date)}
          </Text>
        </Flex>
      </Container>
      {props?.edit && (
        <Flex>
          <Button
            onClick={onEditHandler}
            leftIcon={
              <Icon
                icon='material-symbols:edit-note-rounded'
                width='20'
                height='20'
              />
            }
            className='text-blue-600 bg-gray-100 hover:text-white m-2'
          >
            Edit
          </Button>
          <Button
            onClick={onDeleteHandler}
            leftIcon={
              <Icon icon='ic:baseline-delete-outline' width='20' height='20' />
            }
            className='text-red-500 bg-gray-100 hover:text-white m-2'
          >
            Delete
          </Button>
        </Flex>
      )}
      {notification ?? null}
    </>
  );
};

export default BlogCard;