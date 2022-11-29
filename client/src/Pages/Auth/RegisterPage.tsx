import { Link } from 'react-router-dom';
import { Box, Title, Flex, Text } from '@mantine/core';

import RegisterForm from '../../components/Forms/RegisterForm';
import MainWrapper from '../../components/Wrapper/MainWrapper';

const RegisterPage = () => {
  return (
    <MainWrapper>
      <Box className='max-w-xl grid gap-4 mx-auto'>
        <Title>
          My Blog Corner <br />
          <span className='text-blue-400'>Register</span>
        </Title>

        <RegisterForm />
        <Flex className='mt-2 gap-2'>
          <Text>Don't have an account ?</Text>
          <Link to='/login'>
            <Text fw={600} className='text-blue-600'>
              Login
            </Text>
          </Link>
        </Flex>
      </Box>
    </MainWrapper>
  );
};

export default RegisterPage;