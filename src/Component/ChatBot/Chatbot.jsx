import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import "./Loader.css";
import OpenAI from "openai";
import neo from "../../Assets/neoLogo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import clock from "../../Assets/clockicon.png";
import credit_card from "../../Assets/creditcard.png";
import message from "../../Assets/message.png";
import send from "../../Assets/send.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addChat } from "../../features/Chat";
import { useSelector } from "react-redux";
import Readchats from "../Readchats/Readchats";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
import Suggestion from "../suggestion/Suggestion";
// import { useSelector } from "react-redux";

const Chatbot = () => {
  const [error, seterror] = useState("");
  // const [flag, setflag] = useState(false);
  // const [count, setcount] = useState(0);
  const [chatReply, setChatReply] = useState(""); // New state variable
  const [loading, setLoading] = useState(false);
  const [isVisible,setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const notify = () => toast(error);
  let free_tokens = localStorage.getItem("free_tokens");
  // console.log("", free_tokens);
  const [chatHistory, setChatHistory] = useState([
    { role: "chatbot", content: "Hi there! I am Hue, your neighborhood assistant. How can I help you today?" },
  ]);
  const [formData, setFormData] = useState({
    problem: "",
    location: "",
  });
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  // useEffect(() => {
  //   if (count >= 2) {
  //     setflag(true);
  //   }
  // }, [flag]);

  let allchats = useSelector((state) => state.chats.chats);
  const user = useSelector((state) => state.user);
  // const user = useSelector((state) => state.user);
  console.log("User in chatbot:", user);

  let suggestions = [
    {
      sno: "1",
      suggestion: "Recommend me a neighbourhood known for street art",
    },
    {
      sno: "2",
      suggestion: "Where is the best nightlife",
    },
  ];
  console.log(user);
  const serverURL = "https://neighborhue.vercel.app";
  const devUrl = "http://localhost:5000";

  const onSubmit = async () => {
    if (free_tokens <= 0) {
      alert("No more Free tokens. Please log in to chat with Hue");
      window.location.href = "/register";
      return;
    }
    if (!formData.problem) {
      alert("Please write something in the textarea.");
      return;
    }
    if (!formData.location) {
      alert("Please provide your location.");
      return;
    }
    setIsVisible(true);
    console.log(" free tokens consoled on submit chatbox --- > ", free_tokens);
    if (
      user.user.email &&
      user.user.daily_tokens_available <= 0 &&
      user.user.purchased_tokens_available <= 0
    ) {
      alert(
        "You do not have any tokens right now. Please make a purchase first to continue chatting."
      );
      window.location.href = "/pricing";
      return;
    }

    try {
      var is_free_token;
      setLoading(true);
      if (!user.user.email) {
        free_tokens = free_tokens - 1;
        is_free_token = true;
      } else {
        is_free_token = false;
      }
      localStorage.setItem("free_tokens", free_tokens);
      const response = await axios.post(
        `https://neighborhue.vercel.app/api/ai-chat/chatbot`,
        {
          userEmail: user.user.email,
          message: formData.problem,
          location: formData.location,
          free_tokens,
          is_free_token,
        }
      );

      const updated_user_data = response.data.user;

      if (response.data.message) {
        const newChatHistory = [
          ...chatHistory,
          { role: "user", content: formData.problem },
          { role: "chatbot", content: response.data.message },
        ];

        setChatHistory(newChatHistory);
        setChatReply(response.data.message);

        handleChange("problem", "");
        if (user.user.email) {
          dispatch(
            saveuser({
              email: user.user.email,
              username: user.user.username,
              profilePicture: user.user.profilePicture,
              daily_tokens_available: updated_user_data.daily_tokens_available,
              purchased_tokens_available:
                updated_user_data.purchased_tokens_available,
              tokens_used: updated_user_data.tokens_used,
              is_premium: user.user.is_premium,
            })
          );
        }
      }
    } catch (error) {
      console.log(error.message);
      seterror(error.message || "Error submitting message.");
      notify();
    } finally {
      setLoading(false); // Set loading to false, regardless of success or failure
    }


     // ---------advertisement function for trigger after clicking on button--------
     const loadScript = async (id, delay) => {
      try {
        const script = document.createElement("script");
        script.src = `//www.topcreativeformat.com/${id}/invoke.js`;
        script.async = true;

        window.atOptions = {
          key: id,
          format: "iframe",
          height: 60,
          width: 468,
          params: {},
        };

        const scriptLoaded = new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        const adContainer = document.querySelector(
          `.ads[data-key="${id}"]`
        );
        if (!adContainer) {
          throw new Error(`Advertisement container not found for ID ${id}.`);
        }

        adContainer.appendChild(script);

        await scriptLoaded;
        console.log(`Script for ID ${id} loaded successfully.`);
      } catch (error) {
        console.error(
          `An error occurred while loading the ad script for ID ${id}:`,
          error
        );
      }
    };

    const scriptIds = ["7b7419ab06b5166d1896d5652ed008fc"];
    scriptIds.forEach((id, index) => {
      const delay = 100; // Adding delay for the second script
      setTimeout(() => {
        loadScript(id);
      }, delay);
    });

    return () => {
      const adContainers = document.querySelectorAll(".ads");
      adContainers.forEach((adContainer) => {
        adContainer.innerHTML = "";
        console.log(adContainer);
      });
    };
  };

  const handleClose=()=>{
    setIsVisible(false);
  }

  const handleSuggestionClick = (suggestion) => {
    setFormData((prevData) => ({
      ...prevData,
      problem: suggestion,
    }));
  };

  return (
    <div className="chatbotSectionContainer" id='chatBot'>
    {isVisible && (
        <div className="advertisement-p">
          <div
            data-icon="X"
            class="ads"
            data-key="7b7419ab06b5166d1896d5652ed008fc"
            onClick={handleClose}
          ></div>
        </div>
      )}
      <h2 className="chatbotSectionHeader">Meet Hue</h2>
      <p className="chatbotIntro">
        Discover Your ideal neighborhood with Hue AI. Give your area preferences and let the geo-data model recommend the perfect neighborhood in your city
      </p>
      <div className="chatbotContainer">
        <div className="chatbotContainer-top">
          <img src={neo} alt="neo-logo" />
          <div className="chatbotContainer-top-content">
            <p>Hue</p>
            <p><i class="fa-solid fa-circle" style={{ color: "#2de639", fontSize: "clamp(8px,1vw,12px)" }}></i> Online</p>
          </div>
          <div className="locationSearch">
            <i
              class="fa-solid fa-location-dot fa-lg"
              style={{ color: "#DD6745" }}
            ></i>
            <input
              type="text"
              name="search"
              placeholder="Your City"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
            ></input>
          </div>
        </div>

        <div className="chatbotContainer-chatarea">
          <Readchats chatHistory={chatHistory} />
          {/* {chatReply && (
            <div className="chatbot-reply">
              <strong>Hue:</strong> {chatReply}
            </div>
          )} */}
          {loading && (
            <div className="loader-container">
              <div className="loader-bubble loading">
                <span>Replying...</span>
              </div>
            </div>
          )}
        </div>

        <Suggestion suggestions={suggestions} handleSuggestionClick={handleSuggestionClick} />

        {/* <Suggestion suggestions={suggestions} /> */}
        <div className="chatbotContainer-textarea">
          <textarea
            value={formData.problem}
            onChange={(e) => handleChange("problem", e.target.value)}
            required
            placeholder="Hue: type your neighborhood preferences here"
          />

          <button type="button" onClick={onSubmit} className="app-submitbutton">
            {/* {window.innerWidth > 900 ? <p style={{fontSize:"1.111vw",marginRight:"4px"}}>Send</p> : ""} */}
            <p>Send</p>
            {/* <img src={send} alt="" /> */}
            <i class="fa-regular fa-paper-plane"></i>
          </button>
          <ToastContainer bodyClassName="custom-toast-text" />
        </div>
        {user.user.email ? (
          user.user.is_premium ? (
            <div className="tokens_available chatbotContainer-bottom">
              <p>You have unlimited tokens as part of your premium plan.</p>
              <div className="chat-history">
                <img src={clock} alt="chat History" />
                <Link to="/chathistory">
                  <p>chat History</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="tokens_available chatbotContainer-bottom">
              <div style={{ display: "flex", gap: "50px" }}>
                <p>
                  Tokens available : {user.user.daily_tokens_available}
                </p>
                <p>
                  Purchased tokens available :{" "}
                  {user.user.purchased_tokens_available}
                </p>
              </div>
              <div className="chat-history">
                <img src={clock} alt="chat History" />
                <Link to="/chathistory">
                  <p>Chat history</p>
                </Link>
              </div>
            </div>
          )
        ) : (
          <>
            {!user.user.email && free_tokens == 0 ? (
              <div className="chatbotContainer-bottom">
                <p className="chatbotContainer-bottom-title ">
                  {/* In the Demo chat, you have 2 messages left. Register now and get: */}
                  Please log in to chat with Hue
                </p>
                <div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <img src={message} alt="More Messages" />
                      <Link to="/register">
                        <p>More Messages</p>
                      </Link>
                    </div>
                    <div>
                      <img src={clock} alt="chat History" />
                      <Link to="/register">
                        <p>chat History</p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img src={credit_card} alt="" />
                    <Link to="/pricing">
                      <p> No credit card required</p>
                    </Link>
                  </div>
                </div>
                <Link to="/register">
                  <button className="registerButton">Login Now</button>
                </Link>
              </div>
            ) : (
              <p>
                you have {free_tokens >= 0 ? <span>{free_tokens}</span> : `no`} free tokens
                available
              </p>
            )}
          </>
        )}
        {/* console.log({free_tokens}); */}
        {/* {user.user.email ? (
          <div className="chatbotContainer-bottom">
            <Link to="/chathistory">History</Link>
          </div>
        ) : (
          <div className="chatbotContainer-bottom">
            <p className="chatbotContainer-bottom-title">
              {/* In the Demo chat, you have 2 messages left. Register now and get: */}
        {/* Please log in to chat with Hue */}
        {/* </p> */}
        {/* <div>
        {/* Please log in to chat with Hue */}
        {/* </p> */}
        {/* <div>
              <div style={{ display: "flex" }}>
                <div>
                  <img src={message} alt="" />
                  <p>More Messages</p>
                </div>
                <div>
                  <img src={clock} alt="" />
                  <p>chat History</p>
                </div>
              </div>
              <div>
                <img src={credit_card} alt="" />
                <p> No credit card required</p>
              </div>
            </div>
            <Link to="/register">
              <button className="registerButton">Register Now</button>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Chatbot;

