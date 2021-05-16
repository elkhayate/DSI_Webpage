import React from 'react';
import style from "./Footer.module.css";
import logo from "../images/logo.png";
import silver from "../images/0.png"
import net from "../images/1.png"
import java from "../images/2.png"
import ios from "../images/3.png"
import android from "../images/4.png"
import berry from "../images/5.png"

function Footer() {
    return(
        <div className={style.all}>
    <div className={style.container}>
        <div className={style.container1}>
            <img src={logo}  alt=""/>
            <h2>PT Dwidasa Samsara Indonesia</h2> 
            <p>Ruko Jalur Sutera 29A No. 53 <br></br>Alam Sutera Serpong, Tangerang 15323</p>
        </div>
        <div className={style.container2}>
            <h2>Contact</h2>
            <p>Phone : +62.21.5314.1135 </p>
            <p>Fax : +62.21.5314.1135 </p>
            <p>Email : community@dwidasa.com</p>
        </div>
        <div className={style.container3}>
            <ul className={style.containerlist}>
                <li><img alt = "" src={silver}  className={style.item}/></li>
                <li> <img alt = "" src={net} className={style.item}/></li>
                <li> <img alt = "" src={java} className={style.item}/></li><br/>
                <li><img alt = "" src={ios} className={style.items}/></li>
                <li><img alt = "" src={android} className={style.item}/></li>
                <li><img alt = "" src={berry} className={style.item}/></li>
            </ul>  
        </div>
    </div>
    <div className={style.footer}>
        <p>Copyright © 2015 - Dwidasa Samsara Indonesia</p>
    </div>
    </div>
    )
}

export default Footer;

