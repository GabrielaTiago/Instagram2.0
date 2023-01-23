import { useState } from "react";

export function useLike() {
  const [liked, setLiked] = useState(false);

  return {
    liked,
    setLiked
  };
}
