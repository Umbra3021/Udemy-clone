import { useState } from "react";
import {IoIosArrowDropdown} from "react-icons/io"
const Description = () =>{

    const[ishid,hid] =useState(false);
    
    const hide = () =>{
        hid(true);
        console.log("hi")
    }

    return(
       
        <div>
            
            <div className="desc">
               
                    <h1>Description</h1>
                    <p className="desc-title">Join the most comprehensive and bestselling Angular course on Udemy and learn all about this amazing framework from the ground up, in great depth!</p>
                    <p className="desc-title">This course starts from scratch, you neither need to know Angular 1 nor Angular 2!</p>
                    <p>From <span className="bold">Setup</span> to <span className="bold">Deployment</span>, this course covers it all! You'll learn all about<span className="bold">Components, Directives, Services, Forms, Http</span> Access,<span className="bold" >Authentication, Optimizing an Angular App with Modules and Offline Compilation</span> and <span className="bold">much more</span> - and in the end: You'll learn how to deploy an application!</p>
                    <p><span className="bold">But that's not all!</span> This course will also show you how to use the <span className="bold">Angular CLI</span> and feature a <span className="bold">complete project</span>, which allows you to practice the things learned throughout the course!</p>
                    
                    <p>And if you do get stuck, you <span className="bold">benefit from an extremely fast and friendly support</span> - both via direct messaging or discussion. You have my word! {';-)'}</p>
                    <div onClick={hide}><p className={ishid?"whitebox":"greybox"}>Show more <IoIosArrowDropdown /></p>
                    <div className={ishid?"":"whitebox"}>
            
                        <p>Angular is one of the most modern, performance-efficient and powerful frontend frameworks you can learn as of today. It allows you to build great web apps which offer awesome user experiences! <span className="bold">Learn all the fundamentals you need to know to get started developing Angular applications right away.</span></p>
                        <h5 className="bold">Hear what my students have to say</h5>
                        <p><span className="italic">Absolutely fantastic tutorial series. I cannot thank you enough. The quality is first class and your presentational skills are second to none. Keep up this excellent work. You really rock! - Paul Whitehouse</span></p>
                        <p><span className="italic">The instructor, Max, is very enthusiastic and engaging. He does a great job of explaining what he's doing and why rather than having students just mimic his coding. Max was also very responsive to questions. I would recommend this course and any others that he offers. Thanks, Max!</span></p>
                        <p><span className="italic">As a person new to both JavaScript and Angular 2 I found this course extremely helpful because Max does a great job of explaining all the important concepts behind the code. Max has a great teaching ability to focus on what his audience needs to understand</span></p>          
                        <h5 className="bold">This Course uses TypeScript</h5>
                        <p>TypeScript is the main language used by the official Angular team and the language you'll mostly see in Angular tutorials. It's a superset to JavaScript and makes writing Angular apps really easy. Using it ensures, that you will have the best possible preparation for creating Angular apps. Check out the free videos for more information.</p>
                        <p>TypeScript knowledge is, however, not required - basic JavaScript knowledge is enough.</p>
                        <h5 className="bold">Why Angular</h5>
                        <p>Angular is the next big deal. Being the successor of the overwhelmingly successful Angular.js framework it’s bound to shape the future of frontend development in a similar way. The powerful features and capabilities of Angular allow you to create complex, customizable, modern, responsive and user friendly web applications.</p>
                        <p>Angular is faster than Angular 1 and offers a much more flexible and modular development approach. After taking this course you’ll be able to fully take advantage of all those features and start developing awesome applications immediately.</p>
                        <p>Due to the drastic differences between Angular 1 and Angular (= Angular 2+) you don’t need to know anything about Angular.js to be able to benefit from this course and build your futures projects with Angular.</p>

                        <h5 className="bold">Get a very deep understanding of how to create Angular applications</h5>
                        <p>This course will teach you all the fundamentals about modules, directives, components, databinding, routing, HTTP access and much more! We will take a lot of deep dives and each section is backed up with a real project. All examples showcase the features Angular offers and how to apply them correctly.</p>
                        <p>Specifically you will learn:</p>
                        <ul>
                        <li>Which architecture Angular uses</li>
                        <li>How to use TypeScript to write Angular applications</li>
                        <li>All about directives and components, including the creation of custom directives/ components</li>
                        <li>How databinding works</li>
                        <li>All about routing and handling navigation</li>
                        <li>What pipes are and how to use them</li>
                        <li>How to send HTTP requests (e.g. to REST APIs)</li>
                        <li>What dependency injection is and how to use it</li>
                        <li>How to use modules in Angular</li>
                        <li>How to optimize your (bigger) Angular applications</li>
                        <li>An introduction to NgRx and complex state management</li>
                        <li>We will build a major project in this course so that you can practice all concepts</li>
                        <li>And so much more!</li>
                        </ul>

                        <span className="bold">Pay once, benefit a lifetime!</span>
                        <p>Don’t lose any time, gain an edge and start developing now!  </p>
                        <h1>Who this course is for:</h1>
                        <ul>
                            <li>Newcomer as well as experienced frontend developers interested in learning a modern JavaScript framework</li>
                            <li>This course is for everyone interested in learning a state-of-the-art frontend JavaScript framework</li>
                            <li>Taking this course will enable you to be amongst the first to gain a very solid understanding of Angular</li>
                        </ul>
                </div>
                </div>
            </div> 
            
        </div>
       
    )

}
export default Description;