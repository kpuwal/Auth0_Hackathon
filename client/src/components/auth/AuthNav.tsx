import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </>
  )
}

export default withAuth0(AuthNav);
