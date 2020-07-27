import React from "react";
import Logo from "../../assets/LogoMain.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix" />
      </a>

      <Button className='ButtonLink' as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
