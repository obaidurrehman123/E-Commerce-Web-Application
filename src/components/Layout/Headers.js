import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Headers = () => {
  const [auth, setAuth] = useAuth();
  const handleLoggedOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Ecom Online Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Category <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          {!auth.user ? (
            <>
              {" "}
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {auth?.user?.name}
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink
                    className="dropdown-item"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    DashBoard
                  </NavLink>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/login"
                      onClick={handleLoggedOut}
                    >
                      Logout
                    </NavLink>
                  </li>
                </div>
              </li>
            </>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Cart(0)
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headers;
