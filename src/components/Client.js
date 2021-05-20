import React from 'react';
import style from "./client.module.css";
import cpana from "../images/cpana.png"
import Footer from "./Footer";
import line from "../images/line.png";
import b1 from "../images/image 17.png";
import b2 from "../images/image 16.png";
import b3 from "../images/image 18.png";
import Carousel from "./Carousel";

function Client() {
    const Style = {margin : "12px", width : "30%"};
    return(
        <section className={style.client}>
            <div className={style.container}>
                <h1 className={style.title}>Taking our client in more comfortable way<br/> <span>Deliver IT around  the globe</span></h1>
                <img src={cpana} alt="" className={style.cpana}/>
            </div>
            <div className={style.test}/>
            <div className={style.container1}>
                <h1>Client Line-Up</h1>
                <img src={line} alt=""/>
            </div>
            <div className={style.container2}>
                <img className={style.bank}  src={b1} alt="" style={Style}/>
                <div className={style.content}>
                    <h1>Bank Tabungan Negara</h1><br/>
                    <h2><span>Project WB-Bank BTN :</span></h2><br/>
                    <p> Application Development Project Teller System or known as Web Applications Branch for Bank BTN. Project is to replace the existing application at Bank BTN is running under the Windows platform or desktop applications into Web-based applications applications.</p><br/>
                    <p>Branch Web application will be implemented throughout the Bank BTN - Indonesia, about 600 BTN Office.</p><br/>
                    <p>Web framework: tapestry 5.3<br/>Back end : spring 3.1 + jpa 2<br/>Security: apache shiro<br/>Database: ibm db2 9.7</p>
                </div>
            </div>
            <div className={style.container3}>
                <img className={style.bank}  src={b2} alt=""  style={Style}/>
                <div className={style.content}>
                    <h1>Bank BPR KS</h1><br/>
                    <h2><span>Mobile Banking :</span></h2>
                    <p>This project provides delivery channel application over mobile device for customer to perform banking and financial transactions, such as inquiry balance, overbook, purchase, and payment. Using: JAVA technologies, PostgreSQL, Android technologies, iOS technologies, Blackberry technologies</p><br/>
                    <h2><span>Soft Token :</span></h2>
                    <p>This project provides software application to generate token secure code from mobile device used to authenticate banking and financial transaction from delivery channel performed by customer. Using: JAVA technologies, PostgreSQL, Android technologies, iOS technologies, Blackberry technologies</p><br/>
                    <h2><span>Internet Banking :</span></h2>
                    <p>This project provides delivery channel application over web browser for customer to perform banking and financial transactions, such as inquiry balance, overbook, purchase, and payment. Using: JAVA technologies, PostgreSQL</p><br/>
                    <h2><span>KIOSK :</span></h2>
                    <p>This project provides non-cash delivery channel machine and software application for customer to perform banking and financial transactions, such as inquiry balance, overbook, purchase, and payment. Using: JAVA technologies, .NET framework, PostgreSQL</p><br/>
                </div>
            </div>
            <div className={style.container4}>
                <img className={style.bank}  src={b3} alt="" style={Style}/>
                <div className={style.content}>
                <h1>Bank BPR KS</h1><br/>
                    <h2><span>Mobile Banking :</span></h2>
                    <p>This project provides delivery channel application over mobile device for customer to perform banking and financial transactions, such as inquiry balance, overbook, purchase, and payment. Using: JAVA technologies, PostgreSQL, Android technologies, iOS technologies, Blackberry technologies</p><br/>
                    <h2><span>Soft Token :</span></h2>
                    <p>This project provides software application to generate token secure code from mobile device used to authenticate banking and financial transaction from delivery channel performed by customer. Using: JAVA technologies, PostgreSQL, Android technologies, iOS technologies, Blackberry technologies</p><br/>
                    <h2><span>Internet Banking :</span></h2>
                    <p>This project provides delivery channel application over web browser for customer to perform banking and financial transactions, such as inquiry balance, overbook, purchase, and payment. Using: JAVA technologies, PostgreSQL</p><br/>
                </div>
            </div>
            <Carousel />
            <Footer />
        </section>
    )
}
export default Client;