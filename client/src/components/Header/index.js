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
      <h1
          style={{
            fontSize: "5rem",
            fontFamily: "Misto",
            textDecoration: "none",
            color: "black",
            textAlign: "center",
            
          }}
          >Anti -ISM</h1>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <a href="/profile">Hey You're Logged In 🤩! Woo Hoo!</a>
              <a href="/" onClick={logout}>
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
