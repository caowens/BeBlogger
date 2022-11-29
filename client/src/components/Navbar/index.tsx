import { NavLink, Link } from 'react-router-dom';
import { Flex, Text } from '@mantine/core';
import { Icon } from '@iconify/react';
import { ReactNode } from 'react';
import Auth from '../../services/Auth';

const NavItem = ({
  path,
  title,
  icon,
}: {
  path: string;
  title: string;
  icon?: ReactNode;
}) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <Flex
          className={`${
            isActive ? 'text-blue-600 ' : 'text-gray-600'
          } hover:text-blue-400`}
          align='center'
          gap='sm'
        >
          {icon && icon}
          <Text fw={600} size='lg'>
            {title}
          </Text>
        </Flex>
      )}
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <nav className='shadow py-2 px-8 sticky top-0 z-50 bg-white'>
      <Flex justify='space-between'>
        <Link to='/'>
          <Flex align='center'>
            <Icon icon='logos:builder-io-icon' width='25' color='#3B82F6' />
            <Text className={`text-gray-800 text-2xl ml-1`} fw={600} size='lg'>
              BeBlogger
            </Text>
          </Flex>
        </Link>

        <Flex justify='space-between' gap='xl'>
          {Auth && Auth?.isAuthenticated() && (
            <NavItem
              path='/create-blog'
              title='Create Blog'
              icon={
                <Icon
                  icon='material-symbols:add-circle-outline'
                  width='20'
                  height='20'
                />
              }
            />
          )}
          {Auth && Auth?.isAuthenticated() ? (
            <NavItem
              path='/profile'
              title={Auth?.getUser()?.userName?.split(' ')[0]}
              icon={
                <Icon icon='mdi:user-circle-outline' width='20' height='20' />
              }
            />
          ) : (
            <NavItem
              path='/login'
              title='Login'
              icon={<Icon icon='ph:sign-in-bold' width='20' height='20' />}
            />
          )}
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar;