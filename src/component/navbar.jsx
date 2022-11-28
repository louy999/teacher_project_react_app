import { NavLink } from "react-router-dom";
import "./style/navbar/style.css";
const Navbar = () => {
  return (
    <nav className="navbar shadow p-3 mb-5 bg-body rounded navbar-expand-md bg-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/home">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/test">
                <i className="fa-solid fa-check-double"></i>
                <span>test</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>search</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/schedule">
                <i className="fa-regular fa-calendar-days"></i>
                <span>schedule</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/notification">
                <i className="fa-solid fa-bell">
                  <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-primary">
                    0<span class="visually-hidden">unread messages</span>
                  </span>
                </i>
                <span>notification</span>
              </NavLink>
            </li>
            <li className="nav-item chat">
              <NavLink className="nav-link " to="/chat">
                <i className="fa-solid fa-message"></i>
                <span>chat</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                <i className="fa-solid fa-user"></i>
                <span>profile</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span> sign_out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
