"use client";

import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";

const Firebase = () => {
  const { gitHubSignIn, user } = useUserAuth();
  const onClick = (e) => {
    e.preventDefault();
    gitHubSignIn();
  };
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);
  return (
    <div>
      Welcome to cloudstore
      {user?.email ? (
        `Welcome ${user.email}`
      ) : (
        <button onClick={onClick}>Login</button>
      )}
    </div>
  );
};

export default Firebase;
