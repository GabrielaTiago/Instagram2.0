import { Sidebar } from "../../components";
import { Feed } from "./Feed";

export function Main() {
  return (
    <div className="corpo">
      <Feed />
      <Sidebar />
    </div>
  );
}
