import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <a href="/">
          <h1>ISM</h1>
        </a>

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
