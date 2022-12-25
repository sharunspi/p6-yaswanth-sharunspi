import React, { memo } from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <header>
      <Link to={"/"}>
        <span className="brand">Shortly</span>
      </Link>
      <div className="navigation">
        <nav>
          <Link to={"/about"}>
            <span>About</span>
          </Link>
        </nav>
      </div>
      <div className="login">
        <span className="ml">Login</span>
        <span className="ml">Signup</span>
      </div>
    </header>
  );
}

export default memo(index);
