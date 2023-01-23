export function Story({ user, image }) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={image} alt="foto do usuário" />
      </div>
      <div class="usuario">{user}</div>
    </div>
  );
}
