import user from "../image/icon.png"
import {FaRegThumbsUp,FaRegThumbsDown} from "react-icons/fa"
import { Link } from "react-router-dom"
const FeaturedReview = () =>{

    return(
        <div>
            <div className="FReview">
                <h1>Featured Review</h1>
                <img src={user} alt="userlogo" className="userdetails" style={{height:100,width:100}}></img>
                <div className="details">
                    <h5>Jason W.</h5>
                    <h6>35 courses</h6>
                    <h6>9 reviews</h6>
                </div>
                <h5 className="FRstars">⭐⭐⭐⭐⭐ 4years ago</h5>
                <p>Max is a fantastic instructor, providing in depth explanations of concepts to help you learn. I appreciate that in most instances he provides a starting and ending package to at first give you a boost, and then to allow you to compare or troubleshoot your own work against his. Take the time to not only dive into his lessons, but explore on your own. You will grasp the concepts he teaches quickly!</p>
                <h6>Was this helpful?</h6>
                <button className="reviewbtn"><FaRegThumbsUp size={30} /></button> <button className="reviewbtn"> <FaRegThumbsDown size={30}/></button> <span className="FRreport"><Link>Report</Link></span>
            </div>
        </div>
    )
}

export default FeaturedReview;