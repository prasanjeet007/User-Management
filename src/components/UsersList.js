import React from "react";
import UserList from "./UserList.module.css";
export default function UsersList({ userList }) {
  return (
    <div>
      {userList.map((userData, inx) => (
        <div className={UserList.cardList}>
          <p>{userData?.username}</p>
          <p>{userData?.age}</p>
        </div>
      ))}
    </div>
  );
}
