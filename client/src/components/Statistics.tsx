import { useAuth0 } from '@auth0/auth0-react';

const Statistics = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? (<div>hello from stats</div>) : (<div>login</div>)
  )
}

export default Statistics;
