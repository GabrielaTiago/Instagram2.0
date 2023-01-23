export function Story({ user, image }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={image} alt="foto do usuário" />
      </div>
      <div className="usuario">{user}</div>
    </div>
  );
}
