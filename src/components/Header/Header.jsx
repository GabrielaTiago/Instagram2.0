import { Icons } from "./Icons";
import { Logos } from "./Logos";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <div className="navbar">
      <div className="container">
        <Logos />
        <SearchBar />
        <Icons />
      </div>
    </div>
  );
}
