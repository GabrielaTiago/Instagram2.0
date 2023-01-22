import Stories from "./Stories";
import { storiesData } from "../../mock";

export default function StoriesData() {
  return (
    <div class="stories">
      {storiesData.map((profile, index) => (
        <Stories user={profile.user} image={profile.image} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
