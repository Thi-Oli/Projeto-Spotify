import React from "react";
import LogoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={LogoSpotify} alt="Logo Do Spotify" />
      </Link>

      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
