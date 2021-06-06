import React from "react";
import Frog from "./Frog.jpg";

function Header() {
  return (
    <header>
      <img src={Frog} alt="problem" />
      <p>Meme Maker</p>
    </header>
  );
}

export default Header;
