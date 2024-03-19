import React, { useEffect, useState } from "react";
import "./Chathistory.css";
import neo from "../../Assets/neoLogo.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Chathistory() {
  const [chatHistory, setChatHistory] = useState([]);
  let user = useSelector((state) => state.user);
  const userData = {
    email: user.user.email,
    // token: user.user.token,
  };
  
  

  console.log(user.user.email);
  useEffect(() => {
    if (userData.email) {
      console.log(userData);
      const fetchData = async () => {
        try {
          const response = await axios.post(
            `https://neighborhue.vercel.app/api/ai-chat/chathistory`,
            {
              user: userData,
            }
          );
          console.log(" chats ", response.data.chats);
          setChatHistory(response.data.chats);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div className="chatbotSectionContainer">
      <h2 className="chatbotSectionHeader">Chat History</h2>
      <div className="chatbotContainer">
        <div className="chatbotContainer-top">
          <img src={neo} alt="neo-logo" />
          <div className="chatbotContainer-top-content">
            <p>Neo</p>
            <p>Online</p>
          </div>
        </div>
        <div className="chatbotContainer-chatarea">
          {chatHistory.map((chat, index) => (
            <span
              key={index}
              className={`chat-message ${
                chat.role === "user" ? "right" : "left"
              }`}
            >
              <strong>{chat.role}: </strong>
              {chat.content}
            </span>
          ))}
        </div>
        <div className="chatbotContainer-bottom">
          <Link to="/">
            <button className="registerButton">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
