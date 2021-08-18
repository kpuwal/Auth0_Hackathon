import Auth from './Auth';
import LoginButton from './LoginButton';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? <Auth /> : <LoginButton />}
    </>
  )
}

export default withAuth0(AuthNav);
