"use client";

import { UserContext } from "@/contexts/UserContext";
import useCurrentUser from "@/hooks/useCurrentUser";
import React, { useContext } from "react";

const ChildComponent = () => {
  const {setUser} = useContext(UserContext);
  const user = useCurrentUser();
  const onChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div>
      <b>Child Component</b>
      <form>
        <input type="email" name="email" placeholder="Email" onChange={onChange} />
        <input type="text" name="name" placeholder="Name" onChange={onChange} />
        <input type="number" name="age" placeholder="Age" onChange={onChange} />
      </form>
      {user && (
<>User information:
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>Email: {user.email}</div></>
      )}
    </div>
  );
};

export default ChildComponent;
