import { Link } from "react-router-dom";
import ang from "../image/angular1.png"
import react from "../image/react.png"
import node from "../image/node.png"
import {BsDot} from "react-icons/bs";
const Course = (props) =>{
    return(
        <div>
            <div className="more">
                <img src={props.image} alt="courseLogo" style={{width:"150px",marginLeft:"15%"}}></img>
                <h4>{props.name}</h4>
                <h6>Academind by Maximilian Schwarzmuller</h6>
                <p>{props.rating}<span>{props.star}</span>{props.users}</p>
                <p>{props.desc}</p>
                <p>₹{props.dis}<span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',marginLeft:"10px"}}>₹{props.real}</span></p>
            </div>
        </div>
    )
}
const MoreCourse = () =>{
    return(
        <div>
        <div className="morecourse">
            <h1>More Courses by <Link>Maximilian Schwarzmüller</Link></h1>
            <Course image={ang} name="Angular:Complete Course" rating="4.6" star="⭐⭐⭐⭐" users="(190,866)" desc="51 total hours 544 lectures All levels" dis="499" real="3199"/>
            <Course image={react} name="React:Complete Course" rating="4.7" star="⭐⭐⭐⭐" users="(210,561)" desc="30 total hours 236 lectures All levels" dis="499" real="3199"/>
            <Course image={node} name="Node.js:Road to Mastery" rating="4.5" star="⭐⭐⭐⭐" users="(40,122)" desc="80 total hours 844 lectures All levels" dis="499" real="3199"/>
            <button className="report">Report Abuse</button>
            </div>
            
        </div>
    )
}

export default MoreCourse;