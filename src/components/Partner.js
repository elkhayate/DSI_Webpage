import React from 'react';
import style from "./partner.module.css";
import line from "../images/line.png";
import Footer from "./Footer";
import pac from "../images/image 19.png";
import indo from "../images/image 20.png";
import aks from "../images/image 21.png";
function Partner() {
    return(
        <section className={style.partner}>
            <div className={style.container}/>
            <div className={style.container1}>
                <h1>Together we are strong,<br/> <span>One-stop solution for all banking needs</span></h1>
                <p>Dwidasa Samsara Indonesia is a joint collaboration with several parties that has a good reputation as a business partner, so that we can be the first choice as a “one stop solution” for all banking services provider.</p>
            </div>
            <div className={style.container2}>
                <h1>Partners Line Up</h1>
                <img src={line} alt =""/>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <img src={pac} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis bibendum hendrerit pulvinar.</p>
                </div>
                <div className={style.card}>
                <img src={indo} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis bibendum hendrerit pulvinar.</p>
                </div>
                <div className={style.card}>
                <img src={aks} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis bibendum hendrerit pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui quis volutpat venenatis bibendum hendrerit pulvinar.</p>
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default Partner;