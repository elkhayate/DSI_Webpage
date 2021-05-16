import React,{useState} from 'react';
import style from "./navmobile.module.css";
import bars from "./images/bars.png";
import {Link} from "react-router-dom";
import logo from "./images/logo.png";
function Navmobile() {
    const [showBars, setShowBars] = useState(false);
    function Do() {
        setShowBars(false);
    }
    const Style = {textDecoration: 'none', cursor: "pointer"};
        return (
            <nav className={style.nav}>
                <Link to ="/" style={Style} onClick={()=>Do()}>
                <img className={style.logo} src={logo} alt = ""/>
                </Link>
                <img style={Style}src={bars} className={style.bars} alt="" onClick={() => setShowBars(!showBars)}/>
                {
                    showBars && (
                        <div className={style.DropDown}>
                            <ul className={style.Drop}>
                                <Link to ="/services" style={Style} onClick={()=>Do()}>
                                <li>Services</li>
                                </Link>
                                <Link style={Style} to = "/product" onClick={()=>Do()}>
                                <li>Product</li>
                                </Link>
                                <Link style={Style} to = "/technology" onClick={()=>Do()}>
                                <li>Technology</li>
                                </Link>
                                <Link style={Style} to = "/about" onClick={()=>Do()}>
                                <li>About us</li>
                                </Link>
                                <Link style={Style} to = "/abouts" onClick={()=>Do()}>
                                <li>Team</li>
                                </Link>
                                <Link style={Style} to = "/client" onClick={()=>Do()}>
                                <li>Client</li>
                                </Link>
                                <Link style={Style} to = "/partner" onClick={()=>Do()}>
                                <li>Partner</li>
                                </Link>
                            </ul>
                        </div>
                    )
                }
            </nav>
    )
}


export default Navmobile;