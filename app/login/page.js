"use client";

import { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";

const LoginPage = () => {
  const [data, setData] = useState({});
  const { signIn } = useContext(UserContext);
  const onInputChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    signIn(data);
  };
  return (
    <div>
      <form method="POST" onSubmit={onSubmit}>
        <h1>Login Page</h1>
        <p>This is the login page.</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={onInputChange}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={onInputChange}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;
