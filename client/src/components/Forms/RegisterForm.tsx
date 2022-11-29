import React from 'react';
import { useForm } from '@mantine/form';
import {
  Checkbox,
  PasswordInput,
  TextInput,
  Button,
  Flex,
  Text,
} from '@mantine/core';
import { registerUserAPI } from '../../services/API/login';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigation = useNavigate();
  const [error, setError] = React.useState<string>('');
  const registerForm = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      termsOfService: false,
    },
    validate: {
      password: (value) => {
        if (!value) return 'Password is required.';
        if (value.length < 6)
          return 'Password must be at least 6 character long.';
      },
      email: (value) => (value ? null : 'Email is required'),
      username: (value) => (value ? null : 'Username is required'),
      termsOfService: (value: boolean) =>
        value ? null : 'Permission is required',
    },
  });
  const registerHandler = async (user: any) => {
    try {
      const result: any = await registerUserAPI({
        username: user?.username,
        email: user?.email,
        password: user?.password,
      });
      if (result?.message) throw result;
      if (result) navigation('/profile');
    } catch (err: any) {
      console.log(err);
      setError(err?.message);
    }
  };
  return (
    <form
      className='grid gap-2'
      onSubmit={registerForm.onSubmit((values) => registerHandler(values))}
    >
      <TextInput
        label='Username'
        placeholder='username'
        {...registerForm.getInputProps('username')}
      />
      <TextInput
        label='Email'
        placeholder='your@email.com'
        {...registerForm.getInputProps('email')}
      />
      <PasswordInput
        label='Password'
        placeholder='password'
        {...registerForm.getInputProps('password')}
      />

      <Checkbox
        mt='md'
        label='I agree to not have my privacy.'
        {...registerForm.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      {error && (
        <Flex className='text-xs rounded font-semibold bg-red-500 px-2 py-1 text-white'>
          <Text>{error}</Text>
        </Flex>
      )}

      <Button fw={700} className='bg-blue-500 w-full' type='submit'>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;