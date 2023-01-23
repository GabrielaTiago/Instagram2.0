import logo from "../../assets/images/logos/logo.png";

export function Logos() {
  return (
    <>
      <div class="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="separador"></div>
        <img src={logo} alt="logo do instagram" />
      </div>

      <div class="logo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>

      <div class="instagram-mobile">
        <img src={logo} alt="logo do instagram" />
      </div>
    </>
  );
}
