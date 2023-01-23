import { Actions } from "./Actions";
import { Likes } from "./Likes";

export function Bottom({ pictureLiked, whoLiked }) {
  return (
    <div class="fundo">
      <Actions />
      <Likes pictureLiked={pictureLiked} whoLiked={whoLiked} />
    </div>
  );
}
