import { Link } from 'react-router-dom';
import { Text, Flex, Box, Title } from '@mantine/core';

import MainWrapper from '../../components/Wrapper/MainWrapper';
import LoginForm from '../../components/Forms/LoginForm';

const LoginPage = () => {
  return (
    <MainWrapper>
      <Box className='max-w-xl grid gap-4 mx-auto'>
        <Title>
          My Blogging Corner
          <br />
          <span className='text-blue-400'>Login</span>
        </Title>
        <LoginForm />
        <Flex className='mt-2 gap-2'>
          <Text>Don't have an account ?</Text>
          <Link to='/register'>
            <Text fw={600} className='text-blue-600'>
              Register Now
            </Text>
          </Link>
        </Flex>
      </Box>
    </MainWrapper>
  );
};

export default LoginPage;