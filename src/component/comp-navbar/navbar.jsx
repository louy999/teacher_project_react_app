import { Link } from "react-router-dom";
import "../comp-navbar/style.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/test">
                test
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">
                schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notification">
                notification
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">
                chat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
