import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={onSubmit}
        className="max-w-[600px] flex flex-col bg-slate-200 w-[600px] mt-[200px] p-2"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
