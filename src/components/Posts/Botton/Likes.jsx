export function Likes({ pictureLiked, whoLiked, numberOfLikes }) {
  return (
    <div className="curtidas">
      <img src={pictureLiked} alt="foto do usuário" />
      <div className="texto">
        Curtido por <strong>{whoLiked}</strong> e{" "}
        <strong>outras {numberOfLikes} pessoas</strong>
      </div>
    </div>
  );
}
