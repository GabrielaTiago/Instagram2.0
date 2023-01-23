import React from "react";
import logo from "../../assets/images/logos/logo.png";

export function Logos() {
  return (
    <>
      <div className="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div className="separador"></div>
        <img src={logo} alt="logo do instagram" />
      </div>

      <div className="logo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>

      <div className="instagram-mobile">
        <img src={logo} alt="logo do instagram" />
      </div>
    </>
  );
}
