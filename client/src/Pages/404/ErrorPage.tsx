import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Text, Title, Flex } from '@mantine/core';

import MainWrapper from '../../components/Wrapper/MainWrapper';

const ErrorPage = () => {
  const navigate = useNavigate();
  const onGoHomeHandler = () => {
    navigate(`/`);
  };
  const tryAgainHandler = () => {
    location.reload();
  };
  return (
    <MainWrapper>
      <Flex
        mt='lg'
        direction='column'
        gap='xl'
        className='text-center max-w-sm m-auto'
      >
        <Flex direction='column'>
          <Title className='text-7xl' order={1}>
            <span className='text-blue-500 mx-1'>404</span>
            <span className='text-red-400 mx-1'>Error</span>
          </Title>
          <Text
            className='text-gray-700 rounded text-2xl mt-2'
            fw={700}
            size='md'
          >
            Something Went Wrong.
          </Text>
          <br />
        </Flex>
        <div className='grid gap-2'>
          <Button
            size='md'
            onClick={onGoHomeHandler}
            className='bg-blue-500 font-bold'
          >
            Go Home
          </Button>
          <Button
            variant='light'
            size='md'
            onClick={tryAgainHandler}
            className='font-bold border bg-blue-100 hover:bg-blue-300 hover:text-white'
          >
            Try Again
          </Button>
        </div>
      </Flex>
    </MainWrapper>
  );
};

export default ErrorPage;