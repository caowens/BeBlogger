import React from 'react';
import { useForm } from '@mantine/form';
import { PasswordInput, TextInput, Button, Text, Flex } from '@mantine/core';
import { loginAPI } from '../../services/API/login';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string>('');
  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      password: (value) => (value ? null : 'Password is required.'),
      email: (value) => (value ? null : 'Email is required'),
    },
  });

  const loginHandler = async (userData: {
    email: string;
    password: string;
  }) => {
    try {
      setError('');
      const result = await loginAPI(userData.email, userData.password);
      if (result) location.replace('/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <form
      className='grid gap-2'
      onSubmit={loginForm.onSubmit((values) => loginHandler(values))}
    >
      <TextInput
        label='Email'
        placeholder='Your Email'
        {...loginForm.getInputProps('email')}
      />
      <PasswordInput
        label='Password'
        placeholder='Your Password'
        {...loginForm.getInputProps('password')}
      />
      {error && (
        <Flex className='text-xs rounded font-semibold bg-red-500 px-2 py-1 text-white'>
          <Text>{error}</Text>
        </Flex>
      )}
      <Button fw={700} className='bg-blue-500 w-full mt-2' type='submit'>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;