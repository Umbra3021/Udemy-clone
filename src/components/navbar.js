import { Link } from "react-router-dom";
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineBell} from "react-icons/ai"
import{TfiWorld} from "react-icons/tfi"
import 'bootstrap/dist/css/bootstrap.css';
import Udemy from '../image/udm.png'

const Navbar = ()=>{
    return(
        <div>

          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" href="#"><img src={Udemy} style={{ width: 200, height: 100 }} alt="logo"/></Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
              
                <ul className="navbar-nav me-1  mb-lg-0">
                <li class="nav-item dropdown">
                  <Link class="nav-link mt-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" href="#">Action</Link></li>
                    <li><Link class="dropdown-item" href="#">Another action</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
                <form className="d-flex" role="search">
                  <input className="form-control mx-4" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <li class="nav-item dropdown">
                  <Link class="nav-link  mt-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Udemy Business
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" href="#">Action</Link></li>
                    <li><Link class="dropdown-item" href="#">Another action</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <Link class="nav-link  mt-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Teach On Udemy
                  </Link>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" href="#">Action</Link></li>
                    <li><Link class="dropdown-item" href="#">Another action</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                  </ul>
                </li>
                  
                  <li className="nav-item mx-2">
                    <Link className="nav-link" href="#"><AiOutlineShoppingCart size={40}/></Link>
                  </li>
                  <li className="nav-item mx-2 mb-1">
                    <button className="btn"><b>Login In</b></button>
                  </li>
                  <li className="nav-item mx-2">
                    <button className="btn2">Sign In</button>
                  </li>
                  <li className="nav-item mx-2">
                    <button className="btn world"><TfiWorld size={20}/></button>
                  </li>
                  

                  
                </ul>
               
              </div>
            </div>
          </nav>
        
        </div>
    )
}

export default Navbar;