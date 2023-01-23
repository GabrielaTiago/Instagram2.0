export function Top({ userName, userImage }) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={userImage} alt="foto do usuário" />
        {userName}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
