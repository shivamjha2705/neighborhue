import React from 'react'
import './Comments.css'
import profilePic from '../../Assets/userProfile.png'
import greenUnderline from '../../Assets/greenUnderline.png'

const CommentCard = ({ comment, name, pic }) => {
    return (
        <div className="commentCardContainer">
            <p className="comment">
                {comment}
            </p>
            <div className="commenter">
                <img src={pic} alt="" />
                <p>{name}</p>
            </div>
        </div>
    )
}

export let CommentSlider = () => {
    return (
        <div className="sliderParent">
            <div className="leftFade"></div>
            <div className="rightFade"></div>
            <div className="sliderContainer1">
                <div className="commentSlider1">
                    <div className="commentHolder1">
                        <CommentCard comment={comment1} name={name1} pic={profilePic} />
                        <CommentCard comment={comment2} name={name2} pic={profilePic} />
                        <CommentCard comment={comment3} name={name3} pic={profilePic} />
                        <CommentCard comment={comment4} name={name4} pic={profilePic} />
                        <CommentCard comment={comment5} name={name5} pic={profilePic} />
                        <CommentCard comment={comment6} name={name6} pic={profilePic} />
                    </div>
                    <div className="commentHolder1">
                        <CommentCard comment={comment1} name={name1} pic={profilePic} />
                        <CommentCard comment={comment2} name={name2} pic={profilePic} />
                        <CommentCard comment={comment3} name={name3} pic={profilePic} />
                        <CommentCard comment={comment4} name={name4} pic={profilePic} />
                        <CommentCard comment={comment5} name={name5} pic={profilePic} />
                        <CommentCard comment={comment6} name={name6} pic={profilePic} />
                    </div>
                </div>
            </div>

            <div className="sliderContainer2">
                <div className="commentSlider2">
                    <div className="commentHolder2">
                        <CommentCard comment={comment7} name={name7} pic={profilePic} />
                        <CommentCard comment={comment8} name={name8} pic={profilePic} />
                        <CommentCard comment={comment9} name={name9} pic={profilePic} />
                        <CommentCard comment={comment10} name={name10} pic={profilePic} />
                        <CommentCard comment={comment11} name={name11} pic={profilePic} />
                        <CommentCard comment={comment12} name={name12} pic={profilePic} />
                    </div>
                    <div className="commentHolder2">
                        <CommentCard comment={comment7} name={name7} pic={profilePic} />
                        <CommentCard comment={comment8} name={name8} pic={profilePic} />
                        <CommentCard comment={comment9} name={name9} pic={profilePic} />
                        <CommentCard comment={comment10} name={name10} pic={profilePic} />
                        <CommentCard comment={comment11} name={name11} pic={profilePic} />
                        <CommentCard comment={comment12} name={name12} pic={profilePic} />
                    </div>
                </div>
            </div>
        </div>
    )
}

let comment1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name1 = "Lorem ipsum"
let comment2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name2 = "Lorem ipsum"
let comment3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name3 = "Lorem ipsum"
let comment4 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name4 = "Lorem ipsum"
let comment5 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name5 = "Lorem ipsum"
let comment6 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name6 = "Lorem ipsum"
let comment7 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name7 = "Lorem ipsum"
let comment8 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name8 = "Lorem ipsum"
let comment9 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name9 = "Lorem ipsum"
let comment10 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name10 = "Lorem ipsum"
let comment11 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name11 = "Lorem ipsum"
let comment12 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name12 = "Lorem ipsum"
let comment13 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae";
let name13 = "Lorem ipsum"

const Comments = () => {
    return (
        <div className='commentsContainer'>
            <h2 className="commentsHeading">Trusted by 2000+ People <img src={greenUnderline} alt="" /></h2>

            <CommentSlider />

        </div>
    )
}

export default Comments