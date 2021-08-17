import AuthNav from "./auth/AuthNav";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log("ia authenticated? ", isAuthenticated)
  console.log("is loading? ", isLoading)

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
              <a className="nav-link active" aria-current="page" href="/">home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/statistics">statistics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">profile</a>
            </li>
            <li className="nav-item">
              <AuthNav />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
