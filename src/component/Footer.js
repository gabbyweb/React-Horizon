import { react } from "react";
import style from '../css/style.css';

function Footer () {
    return (
        <>
        <footer>
        <div className="container-fluid bg-black">
            <div className="row">
                <div className="col-md-4">
                    <h3>Ghana</h3>
                    <p>Greater-Accra</p>
                    <p>Office Address:</p><a href="">12th Floor, Silver Star Tower, Liberation Rd. Accra</a>
                </div>
                <div className="col-md-4">
                    <h3>Germany</h3>
                    <p>Munchen</p>
                    <p>Office Address:</p><a href=""> Olive Tower,  Olivet highway. Munchen</a>
                </div>
                <div className="col-md-4">
                    <h3>Canada</h3>
                    <p>Toronto</p>
                    <p>Office Address:</p><a href="">St. Victoria Crescent, Toronto</a>
                </div>
            </div>
        </div>
      </footer>
        </>


    )
}

export default Footer;