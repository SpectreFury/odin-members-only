import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      console.log("Login unsuccessful");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={onSubmit}
        className="max-w-[600px] flex flex-col bg-slate-200 w-[600px] mt-[200px] p-2"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-slate-600 self-center px-6 py-2 text-neutral-200 font-semibold rounded hover:bg-slate-800"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
