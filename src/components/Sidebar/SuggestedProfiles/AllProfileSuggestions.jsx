import { suggestedProfilesData } from "../../../mock";
import { Profile } from "./Profile";

export function AllProfileSuggestions() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestedProfilesData.map((data) => {
        const { userName, userImage, reason } = data;

        return (
          <Profile
            key={userName}
            userName={userName}
            userImage={userImage}
            reason={reason}
          />
        );
      })}
    </div>
  );
}
