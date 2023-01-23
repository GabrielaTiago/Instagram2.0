import { AllPosts } from "../Posts";
import { Stories } from "../Stories";

export default function Esquerda() {
  return (
    <div class="esquerda">
      <Stories />
      <AllPosts />
    </div>
  );
}
