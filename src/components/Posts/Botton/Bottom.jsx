import { Actions } from "./Actions/Actions";
import { Caption } from "./Caption";
import { Comments } from "./Comments/Comments";
import { SeeAllComments } from "./Comments/SeeAllComments";
import { Input } from "./Input";
import { Likes } from "./Likes";

export function Bottom({
  userName,
  pictureLiked,
  whoLiked,
  numberOfLikes,
  postCaption,
  numberOfComments,
  comments,
}) {
  return (
    <div className="fundo">
      <Actions />
      <Likes
        pictureLiked={pictureLiked}
        whoLiked={whoLiked}
        numberOfLikes={numberOfLikes}
      />
      <Caption userName={userName} postCaption={postCaption} />
      <SeeAllComments numberOfComments={numberOfComments} />
      <Comments comments={comments} />
      <Input />
    </div>
  );
}
