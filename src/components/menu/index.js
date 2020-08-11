import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./Menu.css"
import Button from "../button"

function Menu() {
    return(
      <nav className="Menu">
          <a href="/">
              <img className="Logo" src={Logo} alt="YourFlix logo"/>
          </a>

          <Button as="a" className="ButtonLink" href="/">
              Novo vídeo
          </Button>
      </nav>
    );
}

export default Menu;