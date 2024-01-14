import React from "react";

const GossipCard = ({ text, author }) => {
  return (
    <div className="flex flex-col max-w-[600px] p-2 bg-slate-200 my-2">
      <div>{text}</div>
      <p>By {author}</p>
    </div>
  );
};

export default GossipCard;
