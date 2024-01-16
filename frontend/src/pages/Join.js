import React, { useState } from "react";

const Join = () => {
  const [input, setInput] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        secret: input,
      }),
    });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-neutral-200 mt-[200px] w-[600px] flex flex-col items-center p-2">
        <h1 className="font-semibold">
          To join the secret society of Gossip Girl, tell us who the queen of
          Constance is?
        </h1>
        <form onSubmit={onSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="mt-6 p-2 mr-6"
            required
          />
          <button className="font-bold bg-neutral-600 text-white px-6 py-2 rounded hover:bg-neutral-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
