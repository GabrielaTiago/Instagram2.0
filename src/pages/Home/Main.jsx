import { Sidebar } from "../../components";
import { Feed } from "./Feed";

export function Main() {
  return (
    <div class="corpo">
      <Feed />
      <Sidebar />
    </div>
  );
}
