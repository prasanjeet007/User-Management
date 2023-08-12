import React, { useState } from "react";
import UsersList from "./UsersList";

export default function AddUser() {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userData, setUserData] = useState([]);
  function userSubmit(event) {
    let obj = { username, age };
    if (username && age > 0) {
      setUserData([...userData, obj]);
    } else {
      alert("Enter a valid age");
    }
    setUserName("");
    setAge("");
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={(e) => userSubmit(e)}>
        <div>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <UsersList userList={userData} />
    </div>
  );
}
