import React from "react";
import { useLike } from "../../../../hooks";

export function Like() {
  const { liked, setLiked } = useLike();
  const likeStyle = { color: "#ed4956" };

  if (liked) {
    return (
      <ion-icon
        name="heart"
        onClick={() => setLiked(false)}
        style={likeStyle}
      ></ion-icon>
    );
  } else {
    return (
      <ion-icon name="heart-outline" onClick={() => setLiked(true)}></ion-icon>
    );
  }
}
