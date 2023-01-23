import React from "react";
import { AllPosts, Stories } from "../../components";

export function Feed() {
  return (
    <div className="esquerda">
      <Stories />
      <AllPosts />
    </div>
  );
}
