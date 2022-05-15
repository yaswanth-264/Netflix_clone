import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  console.log(show);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix-logo"
      />
    </div>
  );
}

export default Navbar;
