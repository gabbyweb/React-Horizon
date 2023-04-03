import { react } from "react";
import style from '../css/style.css';

function Navbar () {
    return (
        <>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-none">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                            <img src="https://media.istockphoto.com/id/1392529545/photo/white-wooden-capital-letter-h-on-orange-foamy-background.jpg?b=1&s=170667a&w=0&k=20&c=jteuqj6LDz1DGsbYvk7fYfbPB2XkcvfRCgL53vz3EYQ=" alt="" className="img-fluid"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <img className='logos' src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height="50px" width="50px"/>
              </li>
              <li className="nav-item active">
                <img className='logos' src="https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="50px" width="50px"/>
              </li>
              <li className="nav-item active">
                <img className='logos' src="https://images.pexels.com/photos/791942/pexels-photo-791942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" height="50px" width="50px"/>
              </li>
              </ul>
              </div>

                <div className="collapse navbar-collapse justify-content-center" id="">
                    <ul className="navbar-nav mx-auto about-menu">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar;