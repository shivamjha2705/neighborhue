import React, { useEffect, useState } from "react";
import { Link, resolvePath } from "react-router-dom";
import axios from "axios";
import registerVector from "../../Assets/reg2.png";
import googleIcon from "../../Assets/iconGoogle.svg";
import mail from "../../Assets/mailGrey.svg";
import key from "../../Assets/key.svg";
import eye from "../../Assets/eye.svg";
import google_logo from "../../Assets/google_logo.png";
import { useDispatch } from "react-redux";
import { saveuser } from "../../features/User";
import { useSelector } from "react-redux";
import {
  GoogleOAuthProvider,
  googleLogout,
  useGoogleLogin,
  GoogleLogin,
} from "@react-oauth/google";
import "./Register.css";
import jwt_decode from "jwt-decode";
import { store } from "../../app/store.js";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let user = useSelector((state) => state.user);
  console.log(user);

  

  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const serverUrl = "https://neighborhue.vercel.app";
  const devUrl = "http://localhost:5000";

  return (
    <div className="registerContainer">
      <div className="registerFormContainer">
        <div className="registerHeader">
          <h1>Register Now!</h1>
          <p>Welcome to Neighborhue</p>
          <div className="registerForm">
            <div className="or">
              <hr />
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwt_decode(credentialResponse.credential);

                  const decodeduser = {
                    username: decoded.name,
                    email: decoded.email,
                    profilePic: decoded.picture,
                    token: credentialResponse,
                  };
                  console.log("decodeduser: ", decodeduser)
                  const register = async () => {
                    try {
                      const response = await axios.post(
                        `https://neighborhue.vercel.app/register/signin`,                        decodeduser
                      );
                      console.log("response after fetch: ", response);
                      const user = {
                        email: response.data.user.email,
                        username: response.data.user.username,
                        profilePicture: response.data.user.profilePic,
                        daily_tokens_available: response.data.user.daily_tokens_available,
                        purchased_tokens_available: response.data.user.purchased_tokens_available,
                        tokens_used: response.data.user.tokens_used,
                        is_premium: response.data.user.is_premium,
                      };
                      console.log("user after fetch before dispatch: ", user);
                      const userJSON = JSON.stringify(user);
                      localStorage.setItem("user", userJSON);

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
                      localStorage.setItem("reduxState", JSON.stringify(store.getState()));
                      window.location.href = "/";
                    } catch (error) {
                      console.log(error.message)
                      console.error("Error sending data:", error.message);
                      seterrormessage(error.response.data);
                    }
                  };
                  register();
                }}
                onError={() => {
                  seterrormessage("signup failed");
                }}
              />

              {/* <div className="googleButton" onClick={google}>
            <img src={google_logo}/>

          </div> */}



              <hr />
            </div>
            
          </div>

          <div>
            <ul className="list_style">
              <li>Discover Your ideal neighborhood with Hue AI. Give your area preferences and let the geo-data model recommend the perfect neighborhood in your city
              </li>
              <br/>
              <li>Ask Hue to help find the perfect neighborhood based on what you find most important
              </li>
              <br/>
              <li>Whether you’re moving to a new place or just visiting on vacation, you can use neighborhue to learn the most about what you will enjoy in the city.
              </li>
            </ul>
          </div>
        </div>


      </div>

      <div className="registerImg">
        <div className="imgText">
          <h4>Neighborhue</h4>
          <p>Find your perfect neighborhood  today</p>
        </div>
        <img src={registerVector} alt="" />
      </div>
    </div>
  );
};

export default Register;
// >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867
