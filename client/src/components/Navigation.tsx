import AuthNav from "./auth/AuthNav";
import mainLogo from '../assets/newspaper-2.svg';
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bgColor">
      <div className="container-fluid">
        <img  
          src={mainLogo}
          style={{
            width: 40,
            height: 40,
            marginRight: 5
          }}
          alt="newspaper logo"
        />
        <a className="logo" href="/">grade_news!</a>
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
        <div 
          className="collapse navbar-collapse text-right align-button" id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                id={pathname === '/' ? "active" : "inactive"} aria-current="page"
                href="/">home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id={pathname === '/about' ? "active" : "inactive"} aria-current="page"
                href="/about">
                  about
              </a>
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
