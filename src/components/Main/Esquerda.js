import { AllPosts } from "../Posts/AllPosts";
import { Stories } from "../Stories/Stories";

export default function Esquerda() {
  return (
    <div class="esquerda">
      <Stories />
      <AllPosts />
    </div>
  );
}
