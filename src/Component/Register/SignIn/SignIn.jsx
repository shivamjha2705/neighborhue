// <<<<<<< HEAD
// import React from 'react'
// import { Link } from 'react-router-dom'
// import registerVector from '../../../Assets/registerVector.png'
// import googleIcon from '../../../Assets/iconGoogle.svg'
// import mail from '../../../Assets/mailGrey.svg'
// import key from '../../../Assets/key.svg'
// import eye from '../../../Assets/eye.svg'

// const SignIn = () => {
//   return (
//     <div className='registerContainer' id='signInTop'>
//       <div className="registerFormContainer">
        
// =======
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import registerVector from "../../../Assets/reg2.png";
import googleIcon from "../../../Assets/iconGoogle.svg";
import mail from "../../../Assets/mailGrey.svg";
import key from "../../../Assets/key.svg";
import eye from "../../../Assets/eye.svg";
import { useDispatch } from "react-redux";
import { saveuser } from "../../../features/User";
import { useSelector } from "react-redux";
import {
  GoogleOAuthProvider,
  googleLogout,
  useGoogleLogin,
  GoogleLogin,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let user = useSelector((state) => state.user);
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (userData.email && userData.password) {
      try {
        const response = await axios.post(
          "https://nidaan15.onrender.com/login",
          userData
        );
        console.log(response);
        const user = {
          email: response.data.email,
          token: response.data.token,
          type: response.data.type,
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(
          saveuser({
            email: user.email,
            token: user.token,
            type: user.type,
          })
        );
        window.location.href = "/";
      } catch (error) {
        console.error("Error sending data:", error.message);
        seterrormessage(error.response.data);
      }
    } else {
      seterrormessage("Please enter email and password");
    }
  };
  return (
    <div className="registerContainer">
      <div className="registerFormContainer">
{/* >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867 */}
        <div className="registerHeader">
          <h1>Welcome back!</h1>
          <p>Welcome back, Please enter your details</p>
        </div>

        <div className="registerForm">
{/* <<<<<<< HEAD
        
          <button><img src={googleIcon} alt="" />Log in with google</button>
        
======= */}
          <GoogleOAuthProvider clientId="656254641480-6jadrne2lpkdf4u4ldgq1vg9304lbpgo.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwt_decode(credentialResponse.credential);

                const decodeduser = {
                  email: decoded.email,
                  token: credentialResponse,
                };
                const login = async () => {
                  try {
                    const response = await axios.post(
                      "https://nidaan15.onrender.com/login",
                      decodeduser
                    );
                    const user = {
                      email: response.data.email,
                      token: response.data.token,
                      type: response.data.type,
                    };
                    const userJSON = JSON.stringify(user);
                    localStorage.setItem("user", userJSON);

                    dispatch(
                      saveuser({
                        email: user.email,
                        token: user.token,
                        type: user.type,
                      })
                    );
                    window.location.href = "/";
                  } catch (error) {
                    console.error("Error sending data:", error.message);
                    seterrormessage(error.response.data);
                  }
                };
                login();
              }}
              onError={() => {
                seterrormessage("signup failed");
              }}
            />
          </GoogleOAuthProvider>

{/* >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867 */}
          <div className="or">
            <hr />
            <p>Or</p>
            <hr />
          </div>
{/* <<<<<<< HEAD
        
          <form className='register' action="" id='signInForm'>
        
            <div className="registerInputContainer">
              <img src={mail} alt="" className='lIcon' />
              <input type="text" placeholder='Enter Your Email' />
            </div>
        
            <div className="registerInputContainer">
              <img src={key} alt="" className='lIcon' />
              <input type="password" placeholder='Enter Password' />
              <img src={eye} alt="" className='key' />
            </div>

            <div className="registerInputContainer"  id='forgotPasswordContainer'>
              <Link to='' className='forgetPassword'  id='forgotPassword'>Forget Password</Link>
======= */}

          <form className="register" action="" id="signInForm">
            <div className="registerInputContainer">
              <img src={mail} alt="" className="lIcon" />
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="registerInputContainer">
              <img src={key} alt="" className="lIcon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                alt=""
                className={`key ${showPassword ? "show" : ""}`}
                onClick={togglePasswordVisibility}
              />
            </div>

            <div
              className="registerInputContainer"
              id="forgotPasswordContainer"
            >
              <Link to="" className="forgetPassword" id="forgotPassword">
                Forget Password
              </Link>
{/* >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867 */}
            </div>

            {/* <div className="registerInputContainer">
              <img src={key} alt="" className='lIcon' />
              <input type="password" placeholder='Confirm Password' />
              <img src={eye} alt="" className='key' />
            </div> */}
{/* <<<<<<< HEAD

            <button id='signinBtn'>Sign in</button>

          </form>

          <p className="switch">Don't have account? <Link to='/register'> Register now!</Link></p>

        </div>

======= */}
            <p className="register-error-message">{errormessage}</p>

            {/* <button id="signinBtn" onClick={handleSubmit}>
              Sign in
            </button> */}
            <button className="comingBtn" style={{background: "linear-gradient(90deg, rgba(212,65,23,0.7988445378151261) 24%, rgba(84,24,207,0.8016456582633054) 100%)",border:"none",borderRadius:"7px",padding:"12px 18px",color:"#ffff",fontSize:"clamp(12px, 2vw, 18px)",display:"flex",justifyContent:"center"}}>
            Sign in
                    </button>
          </form>

          <p className="switch">
            Don't have account? <Link to="/register"> Register now!</Link>
          </p>
        </div>
{/* >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867 */}
      </div>

      <div className="registerImg">
        <div className="imgText">
          <h4>Neighborhue</h4>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <img src={registerVector} alt="" />
      </div>
{/* // <<<<<<< HEAD */}

{/* </div>
  )
 } */}
{/* 
// export default SignIn
// ======= */}
    </div>
  );
};

export default SignIn;
{/* >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867 */}
