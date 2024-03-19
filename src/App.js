// <<<<<<< HEAD
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import NavBar from './Component/Header/NavBar';
// import Home from './Component/Home/Home';
// import MeetNeo from './Component/MeetNeo/MeetNeo';
// import Footer from './Component/Footer/Footer';
// import Pricing from './Component/Pricing/Pricing';
// import Blogs from './Component/Blogs/Blogs';
// import ContactUs from './Component/ContactUs/ContactUs';
// import Register from './Component/Register/Register';
// import SignIn from './Component/Register/SignIn/SignIn';
// import Login from './Component/Login/Login';

// import './App.css';

// function App() {

//   const location = useLocation();
//   // console.log(location)
//   const pathsWithoutFooter = ['/register', '/signin'];
//   const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);
// =======
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./Component/Header/NavBar";
import Home from "./Component/Home/Home";
import MeetNeo from "./Component/MeetNeo/MeetNeo";
import Footer from "./Component/Footer/Footer";
import Pricing from "./Component/Pricing/Pricing";
import Blog from "./Component/Blogs/Blog";
import BlogDetails from "./Component/Blogs/BlogDetails";
import ContactUs from "./Component/ContactUs/ContactUs";
import Register from "./Component/Register/Register";
import SignIn from "./Component/Register/SignIn/SignIn";
import Login from "./Component/Login/Login";
import Chathistory from "./Component/Chathistory/Chathistory";
import "./App.css";
import { useDispatch } from "react-redux";
import { saveuser } from "./features/User";
import { useSelector } from "react-redux";
import Terms from "./Component/Terms_of_use/Terms";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const pathsWithoutFooter = ["/register", "/signin"];
  const shouldRenderFooter = !pathsWithoutFooter.includes(location.pathname);
  // const user = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //   if (user) {
  //     dispatch(saveuser({ email: user.email, token: user.token, type: user.type }));
  //   }
  // }, []);


  //user register new
  let userData = useSelector((state) => state.user);
  const [user, setUser] = useState(null);

  const serverUrl = "https://neighborhue.vercel.app";
  // const devUrl = "http://localhost:5000";

  useEffect(() => {
    if(userData.user.email){
      setUser(userData.user);
    }
  }, []);


  // >>>>>>> 0914021175b667caf2bffeb3c66fb886b8a68867
  return (
    <>
      <NavBar />
      <Routes>
        {/* <<<<<<< HEAD */}
        <Route path='/' element={<Home />} />
        <Route path='/meetneo' element={<MeetNeo />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path="/blogs/:id/:title" element={<BlogDetails />}/>
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/chathistory" element={<Chathistory />} />
        <Route path='/terms_of_use' element={<Terms />} />
        <Route path='/privacy_policy' element={<PrivacyPolicy />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='*' element={<div>404! Page Not Found</div>} />
      </Routes>

      {shouldRenderFooter && <Footer />} {/* Conditionally render the footer */}

      
    </>
  );
}


export default App;
