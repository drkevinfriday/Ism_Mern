import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <a className="nav-link" href="/"
        style={{
          textDecoration: "none",
        }}>
      <h1
          style={{
            fontSize: "5rem",
            fontFamily: "Misto",
            color: "black",
            textAlign: "center",
            
          }}
          >Anti -ISM</h1></a>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <a className="nav-link"
              style={{
                textDecoration: "none",
                fontFamily: "Misto",
                color: "black",
              }}
              href="/profile">My Profile</a>
              <a href="/" onClick={logout}
              className="nav-link"
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
