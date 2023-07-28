import {TfiWorld} from "react-icons/tfi"
import com from "../image/company.png"
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);
const Footer = () =>{
    return(
        <div>
        <div className="footer">
            <div className="foot">
                <h2>Teach the world online <span> <button className="footbtn">Teach On Udemy</button></span></h2>
                <h4>Create an online video course,reach students across the glode,and earn money</h4>
            </div>
            <div>
           
            </div>
           
            <div>
            <ColoredLine color="white" />
                <h2 style={{marginLeft:"5%"}}>Top companies choose <span style={{color:"purple"}}>Udemy Business </span> to build in-demand career skills. <span><img src={com} alt="companies" style={{width:"500px",marginLeft:"1%"}}></img></span></h2>
               
            </div>
           <div>
           <ColoredLine color="white" />
            <table>
                <tr>
                    <td>Udemy Business</td>
                    <td>career</td>
                    <td>Terms</td>
                </tr>
                <tr>
                    <td>Teach on udemy</td>
                    <td>Blog</td>
                    <td>Privacy Policy</td>
                </tr>
                <tr>
                <td>Get the apps</td>
                <td>Help and support</td>
                <td>Cookie settings</td>
                </tr>
                <tr>
                    <td>About us</td>
                    <td>Affiliate</td>
                    <td>Sitemap</td>
                </tr>
                <tr>
                <td>Contact us</td>
                <td>Investors</td>
                <td>Accessibility statement</td>
                </tr>
            </table>
            <button className="tbbtn"><TfiWorld size={30} style={{marginRight:"5%"}}/>English</button>
           </div>
        </div>
        </div>
    )
}

export default Footer;