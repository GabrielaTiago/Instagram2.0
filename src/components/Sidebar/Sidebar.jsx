import { References } from "./References/References";
import { AllProfileSuggestions } from "./SuggestedProfiles/AllProfileSuggestions";
import { UserProfile } from "./UserProfile/UserProfile";

export function Sidebar() {
  return (
    <div className="sidebar">
      <UserProfile />
      <AllProfileSuggestions />
      <References />
    </div>
  );
}
