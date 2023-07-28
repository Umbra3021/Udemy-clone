import {BsPatchExclamationFill} from "react-icons/bs"
import{TfiWorld} from "react-icons/tfi"
import{PiSubtitlesLight} from "react-icons/pi"
import{BiMobile,BiCaptions} from "react-icons/bi"
import{BsFillPlayBtnFill} from "react-icons/bs"
import{HiOutlineDocumentText,HiOutlineFolderDownload} from "react-icons/hi"
import{AiOutlineFileMarkdown} from "react-icons/ai"
import{GoTrophy} from "react-icons/go"
import { Link } from "react-router-dom"
import {SiNetapp,SiEventbrite} from "react-icons/si"
import{FaWordpressSimple} from "react-icons/fa"





const Body = () =>{

    return(
    <div>
         
            <div className="head">
            <section>
                <div className="head-2">
                    <h5 className="loc">Development {'>'} Web Development  {'>'} Angular</h5>
                    <h1 className="title">Angular - The Complete Guide {'(2023 Edition)'}</h1>
                    <p className="des">Master Angular {'(formerly "Angular 2")'} and build awesome , reactive web apps with the<br/>successor of Angular.js</p>
                    <span className="review"><div className="seller"><p>Bestseller</p></div>4.6 ⭐⭐⭐⭐ <span className="rating">{'(188,171 ratings) '} </span>  697,167 students</span>
                    <p className="author">Created by <a href="/" className="author-link">Maximillian Schwarzmuller</a></p>
                    <span className="header-3"><BsPatchExclamationFill size={20} className="icon"/>Last updated 6/2023</span> <span className="info header-3"><TfiWorld size={20} className="icon"/> English </span>
                    <span className="info header-3"><PiSubtitlesLight size={30} className="icon"/>English {'[CC]'},Bulgarian {'[Auto]'}</span>
                </div>
                </section>
            </div>
        <div>
            <section>
                <div className="learn"> 
                    <h3>What you'll learn</h3>
                    <div className="grid-container">
                        <div class="grid-item"><li> Develop modern, complex, responsive and scalable web applications with Angular</li></div>
                        <div class="grid-item"><li> Fully understand the architecture behind an Angular application and how to use it  </li></div>
                        <div class="grid-item"><li> Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer</li></div>
                        <div class="grid-item"><li> Create single-page applications with one of the most modern JavaScript frameworks out there</li></div>
                    </div>
                    
                </div>
            </section>

            <section>
                <div className="Course">
                    <h3>This Course includes:</h3>
                <div className="course-container">
                        <div class="grid-item"><BsFillPlayBtnFill className="course-icon" size={30}/>36 hours on-demand video</div>
                        <div class="grid-item"><BiMobile className="course-icon"size={30}/>Access on mobile and TV</div>
                        <div class="grid-item"><HiOutlineDocumentText className="course-icon" size={30}/>Assignments</div>
                        <div class="grid-item"><BiCaptions className="course-icon" size={30}/>Closed captions</div>
                        <div class="grid-item"><AiOutlineFileMarkdown className="course-icon" size={30} />47 articles</div>
                        <div class="grid-item"><GoTrophy className="course-icon" size={30}/>Certificate of completion</div>
                        <div class="grid-item"><HiOutlineFolderDownload className="course-icon" size={30}/>179 downloadable resources</div>
                    </div>  
                </div>
                <div>
                    <div className="companies">
                        <h3>Top companies offer this course to their employees</h3>
                        <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide.<Link to="/">Learn more</Link></p>
                        <p><FaWordpressSimple className="companylogo" size={40}/> <SiNetapp className="companylogo" size={40}/> <SiEventbrite className="companylogo" size={40} /></p>
                    </div>
                </div>
            </section>
        </div>
    </div>
   
    )
}

export default Body;