import React, { useState, useEffect } from "react";
import axios from "axios";
import Intro from "../Intro/Intro";
import Solutions from "../Solutions/Solutions";
import Upcoming from "../Upcoming/Upcoming";
import ShareSection from "../ShareSection/ShareSection";
import Chatbot from "../ChatBot/Chatbot";
import Reviews from "../Reviews/Reviews";
import FAQ from "../FAQ/FAQ";
import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch user details from the backend
    // console.log(" fetch has been started ... ");
    if (user.user.email) {
      const email = user.user.email;
      const fetchUserDetails = async () => {
        try {
          const response = await axios.post(
            `https://neighborhue.vercel.app/register/getUser`,
            { email }
          );
          const data = await response.data;
          // console.log("\nhome page data", response);
          const user = {
            email: response.data.user.email,
            username: response.data.user.username,
            profilePicture: response.data.user.profilePic,
            daily_tokens_available: response.data.user.daily_tokens_available,
            purchased_tokens_available:
              response.data.user.purchased_tokens_available,
            tokens_used: response.data.user.tokens_used,
            is_premium: response.data.user.is_premium,
          };

          dispatch(
            saveuser({
              email: user.email,
              username: user.username,
              profilePicture: user.profilePicture,
              daily_tokens_available: user.daily_tokens_available,
              purchased_tokens_available: user.purchased_tokens_available,
              tokens_used: user.tokens_used,
              is_premium: user.is_premium,
            })
          );
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    }

    // Call the fetchUserDetails function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once, on mount

  useEffect(() => {
    const free_tokens = localStorage.getItem("free_tokens");

    if (!free_tokens) {
      localStorage.setItem("free_tokens", 2);
    }
  }, []);

  return (
    <div>
      <Chatbot />

      <Intro />

      <Solutions />

      <Upcoming />

      <ShareSection />

      <Reviews />

      <FAQ />
    </div>
  );
};

export default Home;
