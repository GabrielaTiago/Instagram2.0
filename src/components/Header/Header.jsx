import { Icons } from "./Icons";
import { Logos } from "./Logos";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <div class="navbar">
      <div class="container">
        <Logos />
        <SearchBar />
        <Icons />
      </div>
    </div>
  );
}
