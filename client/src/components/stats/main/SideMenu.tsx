const SideMenu = () => {
  return (
    <>
      <div className="header-label">Statistics</div>
      <ul className="sidebar-menu">
        <li>
          {/* <span className="material-icons-outlined" id="activated">language</span> */}
          <span className="material-icons-outlined" id="side-menu-activated">chevron_right</span>
          <a className="sidebar-menu-item" id="side-menu-activated" href='#statsworld'>
            world 
          </a>
          <p id="side-menu-activated-p">displays news mood for the world</p>
        </li>
        <li>
          {/* <span className="material-icons-outlined">flag</span> */}
          <span className="material-icons-outlined" id="side-menu-deactivated">chevron_right</span>
          <a className="sidebar-menu-item" href='#statscountries'>
            countries
          </a>
          <p>which nation is the news happiest?</p>
        </li>
        <li>
          {/* <span className="material-icons-outlined">article</span> */}
          <span className="material-icons-outlined" id="side-menu-deactivated">chevron_right</span>
          <a className="sidebar-menu-item" href='#statstitles'>
            news titles 
          </a>
          <p>which news magazines to avoid reading?</p>
        </li>
      </ul>
    </>
  )
}

export default SideMenu;