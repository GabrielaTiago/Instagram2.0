import { userData, suggestedProfilesData } from "../../mock";

export default function Sidebar() {
  return (
    <div class="sidebar">
      {userData.map((data) => (
        <Usuario
          name={data.name}
          userName={data.userName}
          userImage={data.userImage}
        />
      ))}

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {suggestedProfilesData.map((data) => (
          <Sugestoes
            userName={data.userName}
            userImage={data.userImage}
            reason={data.reason}
          />
        ))}
      </div>
      <Referencias />
    </div>
  );
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.userImage} />
      <div class="texto">
        <strong>{props.name}</strong>
        {props.userName}
      </div>
    </div>
  );
}
function Sugestoes(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.userImage} />
        <div class="texto">
          <div class="nome">{props.userName}</div>
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
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
