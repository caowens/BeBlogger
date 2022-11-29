import { createBrowserRouter } from 'react-router-dom';

import HomePage from './../Pages/HomePage';
import LoginPage from '../Pages/Auth/LoginPage';
import RegisterPage from '../Pages/Auth/RegisterPage';
import AddBlogPage from '../Pages/Blog/AddBlogPage';
import ErrorPage from '../Pages/404/ErrorPage';
import BlogDetail from '../Pages/Blog/BlogDetailPage';
import ProfilePage from '../Pages/Auth/ProfilePage';
import EditBlogPage from './../Pages/Blog/EditBlogPage';
import PrivateWrapper from './../components/Wrapper/PrivateWrapper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/blog',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-blog',
    element: <AddBlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />,
    errorElement: <ErrorPage />,
  },
  // PRIVATE ROUTES
  {
    path: '/edit-blog/:id',
    element: (
      <PrivateWrapper>
        <EditBlogPage />
      </PrivateWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: (
      <PrivateWrapper>
        <ProfilePage />
      </PrivateWrapper>
    ),
    errorElement: <ErrorPage />,
  },
  // ERROR PAGE
  {
    path: '*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;