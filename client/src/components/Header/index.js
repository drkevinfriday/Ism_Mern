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
            fontSize: "12rem",
            fontFamily: "Misto",
            color: "black",
            textAlign: "center",
            position: "fixed",
            top: "20%",
          }}
          >Anti -ISM</h1>

        <div className="" style={{textAlign:"right", marginRight:"0px"}}>
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
              <a href="/login" className="nav-link">Login</a>
              <a href="/" className="nav-link">Home</a>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="/signup">Signup</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
