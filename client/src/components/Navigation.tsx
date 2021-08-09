import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { isAuthenticated } = useAuth0();

  console.log('is authenticated? ', isAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">GradeNews!</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-right" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/statistics">Statistics</a>
            </li>
            <li className="nav-item">
              { !isAuthenticated ? <LoginButton /> : <LogoutButton /> }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
