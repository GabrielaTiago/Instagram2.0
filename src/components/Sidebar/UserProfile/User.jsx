import React from "react";

export function User({ name, userName, userImage }) {
  return (
    <div className="usuario">
      <img src={userImage} alt="foto do usuário" />
      <div className="texto">
        <strong>{name}</strong>
        {userName}
      </div>
    </div>
  );
}
