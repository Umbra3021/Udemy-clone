import { useState } from "react";
import { Link } from "react-router-dom";
import {AiFillStar,AiFillPlayCircle} from "react-icons/ai"
import {FaAward,FaUserFriends} from "react-icons/fa"
import{IoIosArrowDropdown} from "react-icons/io"
import user from "../image/icon.png"
const Instructor = () =>{

    const[ishid,hid] =useState(false);
    
    const hide = () =>{
        hid(true);
        console.log("hi")
    }


    return(
        <div>
            <div className="Instructor">
                <h2>Instructor</h2>
                <h3><Link>Maximilian Schwarzmüller</Link></h3>
                <h3 className="exp">AWS certified, Professional Web Developer and Instructor</h3>
                <div className="instDetails">
                    <img src={user} alt="instructorLogo" className="userdetails" style={{width:"120px"}}></img>
                    <div className="details inst">
                        <h5><AiFillStar size={20}/>4.6 Instructor Rating</h5>
                        <h5><FaAward size={20}/> 968,826</h5>
                        <h5><FaUserFriends size={20}/>2,590,095 Students </h5>
                        <h5><AiFillPlayCircle size={20}/>59 courses</h5>
                    </div>
                </div>
                <div>
                    <p><span>Experience as (Web) Developer</span></p>
                    <p>Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.</p>
                    <div onClick={hide}><p className={ishid?"whitebox":"greybox"}>Show more <IoIosArrowDropdown /></p>
                    <div className={ishid?"":"whitebox"}>
                        <p>Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!</p>
                        <p>I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification).</p>
                        <p>As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.</p>
                        <p><span>Experience as Instructor</span></p>
                        <p>As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 2,000,000 students on Udemy is the best proof for that.</p>
                        <p>Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content.</p>
                        <p>Together with Manuel Lorenz, I founded Academind to offer the best possible learning experience to our more than 2,000,000 students.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Instructor;