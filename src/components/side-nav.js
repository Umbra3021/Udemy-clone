import angular from "../image/ang.jpg"

import { useEffect, useState } from "react"

import{BiSolidAlarm} from "react-icons/bi"
import { Link } from "react-router-dom"

const Sidenav = () =>{
    const sticky={
        backgroundColor:"white",
        position:"fixed",
        right:"0",
        top:"10px",
        marginRight:"5%",
        marginBottom:"3%",
        width:"450px",
        height:"650px",
        zIndex:"1"
    };



    
    const [value,setValue] = useState(false);
    const[isstop,stops] =useState(false);

    const change=()=>{
    const scroll=document.documentElement.scrollTop;
    if(scroll>500){
        setValue(true);
    }
    else{
        setValue(false);
    }
}

const stop = () =>{
    const scroll=document.documentElement.scrollTop;
    if(scroll>5000){
        stops(true);
    }
    // else if(scroll<2000){
    //     stops(false);
    // }
}

   


    
    window.addEventListener('scroll',change);
    window.addEventListener('scroll',stop);


    return(
        <div>
            <div className="head-0">
           <img clasName="img"src={angular} alt="angular" ></img>

                <div className={value ?"sticky":"contain"}>
              
                        <div className="side-nav">
                            
                        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li class="nav-item me-5" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Personal</button>
                            </li>
                            <li class="nav-item ms-5" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Teams</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">₹499 <span className="discount"><span style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',font:"10px"}}>3199</span> 86% off</span>
                            <div className="sale"><BiSolidAlarm size={20}/> <b>2 hours</b> <span>left at this price!</span></div>
                            <button className="buy">Buy this course</button>
                            <p className="buy-info">30-Day Money-Back Guarantee</p>
                            <p className="buy-info">Full Lifetime Access</p>
                            <span ><p className="links">Share</p><p className="links">Gift this course</p><p className="links">Apply Coupon</p></span>
                            <h3>Subsscribe to Udemy's top courses</h3>
                            <h5>Get this course, plus 8,000+ of our top-rated courses, with Personal Plan. <Link>Learn more</Link></h5>
                            <button className="buy">Start Subscription</button>
                            <p className="buy-info">₹829 per month. Cancel anytime.</p>

                        </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><div className="side-nav">
                        <h3 style={{paddingTop:"10%"}}>Udemy business</h3>
                        <h5>Subscribe to this course and 22,000+ <br />top‑rated Udemy courses for your <br/> organization.</h5>
                        <button className="buy" style={{marginTop:"15%"}}>Try Udemy Business</button>
                        <li style={{fontSize:"25px",paddingTop:"15%"}}>For teams of 5 or more users</li>
                        <li style={{fontSize:"23px"}}>22,000+ fresh & in-demand courses</li>
                        <li style={{fontSize:"25px"}}>Learning Engagement tools</li>
                        <li style={{fontSize:"25px"}}>SSO and LMS Integrations</li>
                            
                            </div><div>
                            
                        <div className="end"></div>
                            
                            </div></div>
                        </div>
                        </div>
            
                </div>
            <div className="head">

           
        </div>
        </div>
    )

}

export default Sidenav;