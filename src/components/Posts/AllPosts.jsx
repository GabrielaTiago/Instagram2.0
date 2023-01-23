import { postData } from "../../mock";
import { Bottom } from "./Botton/Bottom";
import { Content } from "./Content";
import { Top } from "./Top";

export function AllPosts() {
  return (
    <div className="posts">
      {postData.map((data) => {
        const { userName, userImage, userPost, pictureLiked, whoLiked } = data;
        return (
          <div className="post" key={userName}>
            <Top userName={userName} userImage={userImage} />
            <Content userPost={userPost} />
            <Bottom pictureLiked={pictureLiked} whoLiked={whoLiked} />
          </div>
        );
      })}
    </div>
  );
}
