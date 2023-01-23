import { AllPosts } from "../Posts";
import StoriesData from "./StoriesData";

export default function Esquerda() {
  return (
    <div class="esquerda">
      <StoriesData />
      <AllPosts />
    </div>
  );
}
