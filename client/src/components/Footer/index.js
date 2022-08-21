import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        <h3>❤️ Made with love by AnJuli, Vanessa, Kevin & Albalicia</h3>
        &copy;{new Date().getFullYear()} Anti-Ism App
      </div>
    </footer>
  );
};

export default Footer;
