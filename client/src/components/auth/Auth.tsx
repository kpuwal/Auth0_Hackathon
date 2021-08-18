import LogoutButton from "./LogoutButton";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item align-button">
        <a className="nav-link" id={pathname === '/statistics' ? "active" : "inactive"} href="/statistics">statistics</a>
      </li>
      <li className="nav-item align-button">
        <a className="nav-link" id={pathname === '/profile' ? "active" : "inactive"} href="/profile">profile</a>
      </li>
      <li className="nav-item align-button">
        <LogoutButton />
      </li>
    </ul>
  )
}

export default Auth;
