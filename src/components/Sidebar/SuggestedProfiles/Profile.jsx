export function Profile({ userName, userImage, reason }) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={userImage} alt="foto do usuário" />
        <div class="texto">
          <div class="nome">{userName}</div>
          <div class="razao">{reason}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
