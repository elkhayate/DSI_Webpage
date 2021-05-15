import React,{useState} from 'react';
import logo from "./images/logo.png";
import{Link} from "react-router-dom";
import style from "./Nav.module.css";
import union from "./images/Union.png";
import shuffle from "./images/shuffle.png";
import mail from "./images/mail.png";
import arrow from "./images/chevron_down.png";


function Nav() {

    const [showAbout,setShowAbout] = useState(false);

    const Style = {textDecoration: 'none', cursor: "pointer"};
    return(
        <nav className={style.nav}>
            <Link to ="/" style={Style} onClick={()=>setShowAbout(false)}>
            <img className={style.logo} src={logo} alt = "logo"/>
            </Link>
            <ul className={style.navlinks}>
                <Link style={Style} to ="/services" onClick={()=>setShowAbout(false)}>
                <li>Services</li>
                </Link>
                <Link style={Style} to = "/product" onClick={()=>setShowAbout(false)}>
                <li>Product</li>
                </Link>
                <Link style={Style} to = "/technology" onClick={()=>setShowAbout(false)}>
                <li>Technology</li>
                </Link>
                
                <li style={Style} className={style.about} onClick={()=>setShowAbout(!showAbout)} >About  <img src={arrow} alt=""/></li>
                {
                    showAbout && (<div className={style.dropDown}  >
                        <p style={{margin:12}} ><Link style={Style} className={style.drop} to = "/about" onClick={()=>setShowAbout(false)}>About us</Link></p>  
                        <p style={{margin:12}}> <Link style={Style} className={style.drop} to = "/abouts" onClick={()=>setShowAbout(false)}>Team</Link></p>
                       
                    </div>)
                }
                
                <Link style={Style} to = "/client" onClick={()=>setShowAbout(false)}>
                <li>Client</li>
                </Link>
                <Link style={Style} to = "/partner" onClick={()=>setShowAbout(false)}>
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