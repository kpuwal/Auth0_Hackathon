import LoginButton from "./LoginButton";

const Auth = () => {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item align-button">
        <a className="nav-link" href="/statistics">statistics</a>
      </li>
      <li className="nav-item align-button">
        <a className="nav-link" href="/profile">profile</a>
      </li>
      <li className="nav-item align-button">
        <LoginButton />
      </li>
    </ul>
  )
}

export default Auth;
