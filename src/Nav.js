import React from 'react';
import logo from "./images/logo.png";
import{Link} from "react-router-dom";
import style from "./Nav.module.css";
import union from "./images/Union.png";
import shuffle from "./images/shuffle.png";
import mail from "./images/mail.png";
function Nav() {
    const Style = {textDecoration: 'none'};
    return(
        <nav className={style.nav}>
            <Link to ="/" style={Style}>
            <img className={style.logo} src={logo} alt = "logo"/>
            </Link>
            <ul className={style.navlinks}>
                <Link style={Style} to ="/services">
                <li>Services</li>
                </Link>
                <Link style={Style} to = "/product">
                <li>Product</li>
                </Link>
                <Link style={Style} to = "/technology">
                <li>Technology</li>
                </Link>
                <Link style={Style} to = "/about">
                <li>About</li>
                </Link>
                <Link style={Style} to = "/client">
                <li>Client</li>
                </Link>
                <Link style={Style} to = "/partner">
                <li>Partner</li>
                </Link>
            </ul>
            <ul className={style.imgs}>
                <li><img src = {union} alt="union"/></li>
                <li><img src = {shuffle} alt= "shuffle"/></li>
                <li><img src = {mail} alt="mail"/></li>
            </ul>
        </nav>
    )
}
export default Nav;