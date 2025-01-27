import "./Header.scss";
import Logo from "@/assets/LOGO.svg?react";

export const Header = () => {
  return (
    <header id="header">
      <div id="nav-container">
        <a className="header-logo" href="/">
          <Logo />
        </a>
        <nav id="header-nav">
          <a href="/">Accueil</a>
          <a href="/a-propos">A Propos</a>
        </nav>
      </div>
    </header>
  );
};
