import React from 'react';
import style from "./product.module.css";
import ppana from "../images/ppana.png";
import line from "../images/line.png"
import Footer from "../components/Footer";
function Product() {
    return(
        <section className={style.product}>
            <div className={style.container1}>
                <h1 className={style.title}>The most advanced technology <span className={style.span}>always work hand-in-hand with qualified people</span></h1>
            </div>
            <div className= {style.container2}>
                <div className={style.content}>
                <h1>Our Product</h1>
                <img src={line} alt="" />
                <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application such as Internet Banking; mobile frontend application such as Mobile Banking; transaction based banking such as EDC Banking; and other financial platforms such as Personal Investment Portfolio.</p>
                <p>Our product and service range will technically safeguard your business operations through continued application development. It is all topped with our integrated procedure made in accordance with the industry’s best practices, which will drive the built-in system towards the creation of secured and value added services for you as business partners.</p>
                </div>
                <img className={style.ppana} src={ppana} alt = ""/>
            </div>
            <Footer />
        </section>
    )
}
export default Product;