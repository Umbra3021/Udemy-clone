import { useState } from "react";
import { Link } from "react-router-dom";
import {IoIosArrowDropdown,IoIosArrowDropup} from "react-icons/io"
import {PiTelevisionSimpleDuotone} from "react-icons/pi"
const Coursecard = (target) =>{
    const [value,setValue] =useState(false);
    var count=0;
    const clicked = () =>{
        
        if(count%2===0){
            setValue(true);
            count++;
            console.log(count)
        }
        else{
            setValue(false);
            count++;
            console.log(count)
        }
    }
    
    return(
        <div>
            <div className="coursecontent">
            <div>
                <h3 onClick={clicked} className="coursetopic">{value?<IoIosArrowDropup className="courseicon"/>:<IoIosArrowDropdown className="courseicon"/>}{target.type}</h3>
                <div className={value?"shows":"hide"}>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>What You'll Get in This Course</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>01:59</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>What is Angular</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>5:00</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>Angular vs Angular 2</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>3:06</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>Project Setup</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>10:01</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>Creating First App</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>8:57</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>The Course Structure</Link></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>How do I get more out of thid Course</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>05:37</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>What is TypeScript</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>23:58</span></p>
                    <p className="intact"><PiTelevisionSimpleDuotone size={30} style={{marginRight:"2%"}}/><Link>A basic Project</Link><span style={{marginLeft:"50%"}}><Link style={{marginRight:"5%"}}>Preview</Link>35:17</span></p>

                </div>
            </div>
        </div>
        </div>
    )
}

const Course = () =>{

    const [value,setValue] =useState(false);
    const [notshow,show] =useState(false);
    var count=0;
    const clicked = () =>{
        
        if(count%2===0){
            setValue(true);
            count++;
            console.log(count)
        }
        else{
            setValue(false);
            count++;
            console.log(count)
        }
    }

    const expand = () =>{
        show(true);
    }


    return(
        <div className="cou">
            <h4>Course Content</h4>
            <h5>34 sections • 499 lectures • 36h 30m total length</h5>
            <Coursecard type="Getting Started" />
            <Coursecard type="The Basics"/>
            <Coursecard type="Course Project-The Basics"/>
            <Coursecard type="Debugging"/>
            <Coursecard type="Components & Databinding Deep Dive"/>
            <Coursecard type="Course Project-Components & Databinding" />
            <Coursecard type="Directives Deep Dive" />
            <Coursecard type="Course Project-Directives" />
            <Coursecard type="Using Services & Dependency Injection" />
            <Coursecard type="Course Project-Services & Dependency Injection" />
            <div className={notshow? "showed":"hide"}>
                    <Coursecard type="Changing Pages with Routing"/>
                    <Coursecard type="Course Project-Routing"/>
                    <Coursecard type="Understanding Observables"/>
                    <Coursecard type="Course Project-Observables"/>
                    <Coursecard type="Handling Forms in Angular Apps"/>
                    <Coursecard type="Course Project-Forms"/>
                    <Coursecard type="Using Pipes to Transform Output"/>
                    <Coursecard type="Making Http Requests"/>
                    <Coursecard type="Course Project-Http"/>
                    <Coursecard type="Authentication & Route Protection in Angular"/>
                    <Coursecard type="Dynamic Components"/>
                    <Coursecard type="Angular Modules & Optimizing Angular Apps"/>
                    <Coursecard type="Deploying an Angular App"/>
                    <Coursecard type="Standalone Component"/>
                    <Coursecard type="Angular Signals"/>
                    <Coursecard type="Bonus:Using NgRx For State Management "/>
                    <Coursecard type="Bonus:Angular Universal"/>
                    <Coursecard type="Angular Animation"/>
                    <Coursecard type="Adding Offline Capabilities with Service Workers"/>
                    <Coursecard type="A Basic Introduction to Unit Testing in Angular Apps"/>
                    <Coursecard type="Angular as a Platform & Closer Look at the CLI"/>
                    <Coursecard type="Angular Changes & New Features"/>
                    <Coursecard type="Course Roundup"/>
                    <Coursecard type="Bonus:TypeScript Introduction (for Angular 2 Usage )"/>
                </div>

            <div>
                <h1 onClick={expand} className={notshow?"hide":"visible"}>24 more sections</h1>
            </div>
            <div className="req">
                <h3>Requirements</h3>
                <ul>
                    <li>NO Angular 1 or Angular 2+ knowledge is required!</li>
                    <li>Basic HTML and CSS knowledge helps, but isn't a must-have</li>
                    <li>Prior TypeScript knowledge also helps but isn't necessary to benefit from this course</li>
                    <li>Basic JavaScript knowledge is required</li>

                </ul>
            </div>
        </div>
        
    )

}
export default Course;