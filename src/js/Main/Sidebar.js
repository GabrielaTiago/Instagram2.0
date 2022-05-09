export default function Sidebar() {
    const userData = [{ userName: "Catana", user: "catanacomics", src: "assets/img/catanacomics.svg" }];

    const sidebarData = [
        {
            userSugestion: "bad.vibes.memes",
            userSugPictures: "assets/img/bad.vibes.memes.svg",
            reason: "Segue você"
        },
        {
            userSugestion: "chibirdart",
            userSugPictures: "assets/img/chibirdart.svg",
            reason: "Segue você"
        },
        {
            userSugestion: "razoesparaacreditar",
            userSugPictures: "assets/img/razoesparaacreditar.svg",
            reason: "Novo no Instagram"
        },
        {
            userSugestion: "adorable_animals",
            userSugPictures: "assets/img/adorable_animals.svg",
            reason: "Segue você"
        },
        {
            userSugestion: "smallcutecats",
            userSugPictures: "assets/img/smallcutecats.svg",
            reason: "Segue você"
        }
    ];

    return (
        <div class="sidebar">
            {userData.map(data => <Usuario
                userName={data.userName}
                user={data.user}
                src={data.src} />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sidebarData.map(data => <Sugestoes
                    userSugestion={data.userSugestion}
                    userSugPictures={data.userSugPictures}
                    reason={data.reason} />)}
            </div>
            <Referencias />
        </div>
    );
}

function Usuario(props) {
    return (
        <div class="usuario">

            <img src={props.src} />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.userName}
            </div>
        </div>
    );
}
function Sugestoes(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userSugPictures} />
                <div class="texto">
                    <div class="nome">{props.userSugestion}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Referencias() {
    return (
        <div class="referencias">
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}