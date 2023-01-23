import React from "react";

export function Top({ userName, userImage }) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={userImage} alt="foto do usuário" />
        {userName}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
