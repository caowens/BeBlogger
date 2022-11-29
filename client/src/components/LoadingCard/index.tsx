import React from 'react';
import { Loader, Container } from '@mantine/core';

const LoadingCard = () => {
  return (
    <Container className='grid mt-32 justify-center'>
      <Loader variant='dots' />
    </Container>
  );
};

export default LoadingCard;