export default function TopMenu (){
    return(
        <menu class="top-menu">
            <div class="instagram">
                <div class="logo-icon"><ion-icon name="logo-instagram"></ion-icon></div>
                <div class="bordder-logo"></div>
                <div class="logo-img"><img src="assets/images/logo.png" /></div>
            </div>
            <div class="search-bar"><p>Pesquisar</p></div>
            <div class="icons-insta">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </menu>
    );
}