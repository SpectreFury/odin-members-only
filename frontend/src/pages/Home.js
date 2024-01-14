import React, { useState, useEffect } from "react";
import GossipCard from "../components/GossipCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchBlasts = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:4000/getBlasts", {
        headers: {
          "x-access-token": token,
        },
      });
      const result = await response.json();

      setMessages(result);
    };

    fetchBlasts();
  }, []);

  return (
    <main className="flex flex-col items-center">
      {messages.map((message) => (
        <GossipCard text={message.text} author={message.author} />
      ))}
    </main>
  );
};

export default Home;
