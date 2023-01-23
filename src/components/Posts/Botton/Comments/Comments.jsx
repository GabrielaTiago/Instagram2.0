import { Comment } from "./Comment";

export function Comments({ comments }) {
  return (
    <div className="comentarios">
      {comments.map((data) => {
        const { userName, comment } = data;

        return <Comment key={userName} userName={userName} comment={comment} />;
      })}
    </div>
  );
}
