import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <header>
      <a href="/">
        <span className="brand">Shortly</span>
      </a>
      <div className="navigation">
        <nav>
          <a href="/about">
            <span>About</span>
          </a>
        </nav>
      </div>
      <div className="login">
        <span className="ml">Login</span>
        <span className="ml">Signup</span>
      </div>
    </header>
  );
}

export default index;
