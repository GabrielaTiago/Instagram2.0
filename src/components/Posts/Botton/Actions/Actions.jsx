import { Like } from "./Like";

export function Actions() {
  return (
    <div className="acoes">
      <div className="acoes-esquerda">
        <Like />
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div className="acoes-direita">
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}
