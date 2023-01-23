export function Likes({ pictureLiked, whoLiked }) {
  return (
    <div className="curtidas">
      <img src={pictureLiked} alt="foto do usuário" />
      <div className="texto">
        Curtido por <strong>{whoLiked}</strong> e{" "}
        <strong>outras 99.159 pessoas</strong>
      </div>
    </div>
  );
}
