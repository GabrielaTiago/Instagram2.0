import React from "react";
import { userData } from "../../../mock";
import { User } from "./User";

export function UserProfile() {
  return (
    <>
      {userData.map((data) => {
        const { name, userName, userImage } = data;

        return (
          <User
            key={name}
            name={name}
            userName={userName}
            userImage={userImage}
          />
        );
      })}
    </>
  );
}
