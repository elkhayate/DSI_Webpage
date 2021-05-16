import React from 'react';
import style from "./technology.module.css";
import Footer from "../components/Footer";
import cover from "../images/coveer.svg";
import elements from "../images/elements.png";
import line from "../images/line.png"

function Technology() {
    return(
        <>
        <section className={style.technology}>
            <div className={style.container1}>
                <div className={style.title}>
                <h1> “Knowledge” some way of future  <span className={style.span}>  up-to-date in latest technology</span></h1>
                <button className={style.btn}>Learn More</button>
                </div>
            <img className = {style.f}src={cover} alt = ""/>
            <div className={style.title1}>
                <h1> “Knowledge” some way of future  <span className={style.span}>  up-to-date in latest technology</span></h1>
            </div>
            </div>
            <div className={style.test}>
            </div>
            <div className={style.elements}>
                <img src={elements} alt = ""/>
            </div>
            <div className={style.techcontent}>
                <h1>Our Technology</h1>
                <img src = {line} alt = ""/>
                <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.The latest Java version contains important enhancements to improve performance, stability and security of the Java applications that run on your machine. Installing this free update will ensure that your Java applications continue to run safely and efficiently. The best part of JAVA is free.</p><br/>
                <p>We also use PHP for general occation, why? we think you already know the reason,of course because is the most flexible language on earth that can colaborate very well with all language.</p><br/>
                <p>for the strusture is HTML & CSS ( who does not know ? ) cause it's the basic language use for the web and help us creating a very outstanding view. its become important cause it make our system looks good in front of the eyes of our client, (doesnt agree?), Hmm, let me ask you if you have a good software but with bad UI/UX, do people use it? cause for it we can reach our goals.</p><br/>
                <p>What about Microsoft technology, why not... We always strive to remain the best and try to keep developing what we have.</p><br/>
            </div>
            <div className={style.foot}>
            <Footer />
            </div>
        </section>
       
            
        

        </>
    )
}
export default Technology;