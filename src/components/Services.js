import React from 'react';
import style from "./services.module.css";
import Footer from "../components/Footer";
import line from "../images/line.png";
import pana from "../images/spana.png";
function Services() {
    return(
        
        <section className = {style.services}>
            <div className={style.container1}>
                <h1>Just a smile away from<br/><span>Winning your customer’s trust</span></h1>
            </div>
            <div className={style.container2}>
                <div className={style.container2content}>
                    <h1>Our Service</h1>
                    <img className={style.line} src={line}alt = ""/>
                    <p><span>DSI</span>’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors. We short-cut your front-liners to customers interaction process through a way that mediates your business process in a more direct communication means, in just a smile away from winning your customer’s trust.</p>
                    <p>Through close partnership, we always work together with your team, all throughout from pretopost project cycles – initial planning, project development, implementation, evaluation up to reporting documentation – to fully coach you so that all your specific business.</p>
                    <p>requirements can be delivered at the right time to the right audience of particular interests. Moreover, our team will support you to provide a detailed consultation throughout operation stage, and after the project implementation cycles by applying specific monitoring and improvement methodology. Our experienced people will drive your personalized service, by utilizing the best technology supports no other businesses can provide.</p>
                </div>
                <img className = {style.spana}src={pana} alt = ""/>
            </div>

            
            <Footer />
            
        </section>
        
        
    )
}
export default Services;
