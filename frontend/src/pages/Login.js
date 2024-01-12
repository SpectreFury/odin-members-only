import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <form
        action="http://localhost:4000/login"
        method="POST"
        className="max-w-[600px] flex flex-col bg-slate-200 w-[600px] mt-[200px] p-2"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
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
