import { Sidebar } from "../Sidebar/Sidebar";
import Esquerda from "./Esquerda";

export default function Main() {
  return (
    <div class="corpo">
      <Esquerda />
      <Sidebar />
    </div>
  );
}
