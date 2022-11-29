import { Icon } from '@iconify/react';
import { Flex, Text, Container, Title } from '@mantine/core';
import React, { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Auth from '../../services/Auth';

const NavItem = ({
  path,
  title,
}: {
  path: string;
  title: string;
  icon?: ReactNode;
}) => {
  return (
    <Link to={path}>
      <Flex
        className='text-gray-300 hover:text-blue-600'
        align='center'
        gap='sm'
      >
        <Text fw={600} size='md'>
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className='shadow py-8 px-8 sticky top-0 z-50 bg-gray-700'>
      <Flex justify='space-between'>
        <div className='w-1/3'>
          <Link to='/'>
            <Flex align='center'>
              <Icon icon='logos:builder-io-icon' width='25' color='#3B82F6' />
              <Text className={`text-white text-2xl ml-1`} fw={600} size='lg'>
                BeBlogger
              </Text>
            </Flex>
          </Link>
          <Text className='text-gray-200 my-2' size='xs'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </div>
        <div className='w-1/4'>
          <Title order={3} className='text-blue-400'>
            Quick Links
          </Title>
          <div className='grid  md:grid-cols-2  gap-0 mt-4'>
            <NavItem path='/' title='Home' />
            <NavItem path='/login' title='Login' />
            <NavItem path='/register' title='Register' />
            <NavItem path='/profile' title='Profile' />
            <NavItem path='/create-blog' title='Create Blog' />
          </div>
        </div>
      </Flex>
      <Text className={`text-white text-sm text-center mt-4`} fw={600}>
        All Copyright Claimed @{new Date().toUTCString().split(' ')[3]}
      </Text>
    </footer>
  );
};

export default Footer;