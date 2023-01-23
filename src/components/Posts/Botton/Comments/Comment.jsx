import { Like } from "../Actions/Like";

export function Comment({ userName, comment }) {
  return (
    <div className="comentario">
      <div className="comentario">
        <strong>{userName}</strong> {comment}
      </div>
      <Like />
    </div>
  );
}
