import {BsDot} from "react-icons/bs"
import {FaRegThumbsUp,FaRegThumbsDown} from "react-icons/fa"
import s from "../image/ss.png"
import k from "../image/k.png"

const RReview = (props) =>{
    return(
        <div>
            <div class="grid-item x">
                    <img src={props.image} alt="user" className="userdetails"></img>
                    <h5>{props.name}</h5>
                    <h5>{props.star}<span style={{paddingLeft:"2%"}}>{props.time}</span></h5>
                    <p >{props.message}</p>
                    <p>Helpful? <button><FaRegThumbsUp style={{marginLeft:"2%",marginRight:"2%"}}/></button> <button><FaRegThumbsDown/></button> </p>
                </div>
        </div>
    )
}
const Review = () =>{
    return(
        <div>
            <div className="review">
                <h2>⭐ 4.6 course rating <BsDot /> 188k ratings </h2>
                <div className="review-container">
                <RReview image={s} name="Sourav" star="⭐⭐⭐⭐⭐" time="2 weeks ago" message="One of the best courses that I have come across, was immersed in it from start to end. Great coverage of angular topics and good side project to practice and follow along the course"/>
                <RReview image={k} name="Krishna" star="⭐⭐⭐⭐⭐" time="5 weeks ago" message="It's an excellent course for everybody who wants to learn Angular. It contains information about Angular and related topics like TypeScript, NgRX(state library), and some explanations regarding RxJS."/>
                <RReview image={s} name="Shelly" star="⭐⭐⭐⭐⭐" time="1 year ago" message="It was a very well structured course and you explain very well. Just when it came to ng-rx with and without standalone-components with new and alternative syntax" />
                <RReview image={k} name="Killmonger" star="⭐⭐⭐⭐⭐" time="1 year ago" message="Comprehensive and easy to follow. May not be for absolute beginners to programming, as some people have said they got lost. I already know a number of languages so picking this up was very straightforward." />
                </div>
                <button>Show all reviews</button>
            </div>
        </div>
    )
}
export default Review;