import { storiesData } from "../../mock";
import { Story } from "../Stories/Story";

export function Stories() {
  return (
    <div className="stories">
      {storiesData.map((data) => {
        const { user, image } = data;

        return <Story key={user} user={user} image={image} />;
      })}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
