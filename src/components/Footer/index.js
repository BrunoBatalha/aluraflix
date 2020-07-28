import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/LogoMain.png";

function Footer() {
  return (
    <FooterBase>
      <a
        href="https://github.com/BrunoBatalha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt="Github Bruno Batalha" width="100" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a
          href="https://www.alura.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
