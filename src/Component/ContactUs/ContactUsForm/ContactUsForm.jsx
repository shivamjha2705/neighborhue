// import React from 'react'
import React, { useState } from "react";
import bg from '../../../Assets/formBg.webp'
import send from '../../../Assets/send.svg'
import axios from "axios";
import { toast } from "react-hot-toast";
import Loader from "./Loader"

import './ContactUsForm.css'


const About = () => {



    return (
        <div className="aboutContainer" id='aboutUs'>

            <div className="abouts">
                <h2>About Neighborhue</h2>
                <p className='trust'>
                    “ Hue AI ”
                </p>
                <p className='aboutDetail'>
                    Hue AI is a generative model that combines vast online sources and geographical data analytics to determine which neighborhoods are best for various purposes.The model focuses on understanding the intersection between preferences and locations to best produce recommendations based on what the user is seeking most in an area.
                </p>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Our Mission</h3>
                <p className="aboutDetail">
                    At neighborhue, we are dedicated to helping individuals find their perfect neighborhood by leveraging the power of Hue AI, a generative model that combines vast online sources and geographical data analytics. Whether you are relocating or visiting a new city, our platform provides personalized recommendations based on your specific preferences. By focusing on the intersection between user preferences and locations, we aim to alleviate the stress of decision-making and enhance the overall experience of discovering and settling into a new area. Our commitment is to empower users with in-depth locational knowledge, making neighborhue the go-to resource for informed and tailored neighborhood exploration.
                </p>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Why Choose Us?</h3>
                <ul className="aboutDetail">
                    <li className='aboutList'>
                        The perfect generative AI model for finding amazing neighborhoods
                    </li>
                    <li className='aboutList'>
                        Leverage expert locational knowledge with the use of Hue AI
                    </li>
                    <li className='aboutList'>
                        Avoid uncertainty next time you travel with the perfect travel itinerary
                    </li>
                    <li className='aboutList'>
                        Find a new neighborhood you can call home after researching with neighborhue
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ContactUsForm = () => {

    const [username, setUsername] = useState("");
    const [problemDescription, setProblemDescription] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [loading, setLoading] = useState(false);


    const serverURL = "https://neighborhue.vercel.app";
    const devUrl = "http://localhost:5000";

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(
                `https://neighborhue.vercel.app/api/inquiry/send-inquiry`,
                {
                    username,
                    userEmail,
                    problemDescription,
                },
            );

            console.log("Server Response:", response); // Log the response

            if (response.data) {
                setUsername("");
                setProblemDescription("");
                setUserEmail("");
                toast.success(response.data.message);
            } else {
                toast.error("Unexpected response from server");
            }

            setLoading(false);
        } catch (error) {
            console.error("Error in submitHandler:", error);
            toast.error(error.response?.data?.message || "An error occurred");
            setLoading(false);
        }
    };

    return (
        <div className='ContactFormContainer'>
            <img src={bg} alt="" className="formBg" loading="lazy" />
            <div className="formAboutContainer">
                <div className="formContainer">
                    <div className="formHeader">
                        <h2>Facing any trouble? We are here to help.</h2>
                        <p>Tell us more about yourself and what you've got in my mind</p>
                    </div>
                    <form action="" onSubmit={submitHandler}>
                        <input type="text" name="" id="" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input type="email" name="" id="" placeholder='Your @Email ID' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                        <input type="text" name="" id="" placeholder='Tell us your problem' value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} className='formFeedback' required />
                        <button type="submit">{loading ? <Loader /> : "Submit now"}<img src={send} alt="" className='submitIcon' loading="lazy" /></button>
                    </form>
                </div>

                <About />

            </div>
        </div>
    )
}

export default ContactUsForm