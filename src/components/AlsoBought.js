import ang1 from "../image/angular1.png"
import ts from "../image/types.png"
import ang2  from "../image/angular2.png"
import {AiOutlineHeart} from "react-icons/ai"
import {FiUsers} from "react-icons/fi"

const CC = (props) =>{
    return(
        <div>
            <div className="bought">
                <img src={props.img} alt="coursecard" className="ccdetails img" style={{width:100,height:100}}></img>
                <h6 className="ccdetails">{props.name}</h6>
                <p className="ccdetails extra rating">{props.stars} ⭐</p>
                <p className="ccdetails extra"><FiUsers style={{paddingRight:"1px"}}/>{props.users}</p>
                <div className="ccdetails extra p" >
                        <p className="discount">₹{props.discount}</p>
                        <p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{props.real}</p>
                </div>
                <button className="ccdetails extra" style={{marginBottom:"15%"}}><AiOutlineHeart size={30}/></button>   
                
        </div>
        </div>
    )
}
const AlsoBought = () =>{
    return(
        <div className="coursecard">
            <h1>Students also bought</h1>
           <CC img={ang1} name="complete Angular Developer in 2023:Zero to Mastery" stars="4.4" users="111602" discount="649" real="3499"/>
           <CC img={ang2} name="The Complete Angular Course:Beginner to Advanced" stars="4.3" users="111962" discount="649" real="3199"/>
           <CC img={ts} name="Understanding TypeScript" stars="4.6" users="217801" discount="649" real="3199"/>
        </div>
    )
}

export default AlsoBought;