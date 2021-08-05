const Navigation = () => {
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
              <a className="nav-link active" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/statistics">Statistics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
