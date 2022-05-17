import React from "react";

function NavBar() {
  return (
    <nav className="navigator designe grid">
      <div className="nav-item">
        <a className="link" href="#s">
          Profile
        </a>
      </div>
      <div className="nav-item">
        <a className="link" href="#s">
          Messages
        </a>
      </div>
      <div className="nav-item">
        <a className="link" href="#s">
          News
        </a>
      </div>
      <div className="nav-item">
        <a className="link" href="#s">
          Music
        </a>
      </div>
      <div className="nav-item">
        <a className="link" href="#s">
          Settings
        </a>
      </div>
    </nav>
  );
}

export default NavBar;