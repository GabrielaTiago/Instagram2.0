export function Comment({ userName, comment }) {
  return (
    <div className="comentario">
      <div className="comentario">
        <strong>{userName}</strong> {comment}
      </div>
      <ion-icon
        class="like-comentario-icon"
        name="heart-outline"
      ></ion-icon>
    </div>
  );
}
