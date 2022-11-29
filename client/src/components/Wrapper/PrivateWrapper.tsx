import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../../services/Auth';
import LoadingCard from '../LoadingCard';

const PrivateWrapper = (props: { children: ReactNode }) => {
  const navigation = useNavigate();

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!Auth.isAuthenticated()) navigation('/login');
    else {
      setIsLoading(false);
    }
  }, []);

  return <>{isLoading ? <LoadingCard /> : props.children}</>;
};

export default PrivateWrapper;