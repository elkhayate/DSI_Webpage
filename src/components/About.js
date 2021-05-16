import React from 'react';
import style from "./about.module.css";
import Footer from "./Footer";
import logo from "../images/aboutlogo.png";
import line from "../images/line.png";
import drone from "../images/drone.png";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
import eng from "../images/eng.png";
import line2 from "../images/line2.png";
import maill from "../images/maill.png";
import house from "../images/house.png";
import telefon from "../images/telefon.png";
import map from "../images/map.png";
function About() {
    return(
        <section className = {style.about}>
            <div className = {style.container1}>
                <div className={style.content1}>
                <h1>to grow the business together<br/><span> Continous effort through improvement and innovation</span></h1>
                <img src={logo} alt="" className={style.logo}/>
                </div>
            </div>
            <div className={style.container2}>
                <h1>About Dwidasa Samsara Indonesia (DSI)</h1>
                <img src = {line} alt=""/>
                <p><span>Dwidasa Samsara Indonesia (DSI)</span> was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept. Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p><br/>
                <p>Then from that perspective, we named our company ‘<span>Dwidasa Samsara Indonesia</span>’, which means continuous efforts through improvement and innovation will help us evolving toward the forefront position in Indonesia. In responding to various clients’ specifi c requirements, <span>DSI</span> will work consistently in optimizing its existing reliable resources combined with well-trained team supports, to present particularly the dynamic fi nancial industry sector with its customized solutions.</p><br/>
                <p>Considering the complexity of the clients’ demand, however notwithstanding the size of the organization, <span>DSI</span> is always committed to work effectively for growing the business together with business partners, through its innovative and collaborative methodology while assuring a fast response time to customers. That way, the final output is delivered in a secured and timely manner, towards the attainment of the most effi cient outcome.</p><br/>
                <p>For <span>DSI</span>, both technical and non-technical supports are as important as the partnership we have built with your business. Among others, our partnership portfolio has been built with various business segments such as Internet Service Provider (ISP), Application Service Provider (ASP) and Payment Network corporations. Through such partnerships, we are evolving together to a new height of innovative explorations and effective improvements with purpose to having a sustainable business operation cycles.</p><br/>
            </div>
            <div className={style.container3}>
                <div className={style.content2}>
                <div className={style.out}>
                        <h1>Our Future Prespective</h1>
                        <img src={line} alt = ""/>
                        </div>
                    <img src={drone} alt = "" className={style.drone}/>
                    <div className={style.content2d}>
                        <div className={style.our}>
                        <h1>Our Future Prespective</h1>
                        <img src={line} alt = ""/>
                        </div>
                        <div className={style.content21}>
                            <img src={vision} alt = ""/>
                            <div className={style.da21}>
                                <h1>Vision</h1><br/>
                                <p>To become the leading application service provider (ASP) focusing on front-end application delivered for Indonesia’s banking and fi nancial industry.</p>
                            </div>
                        </div>
                        <div className={style.content22}>
                            <img src={mission} alt = ""/>
                            <div className={style.da22}>
                                <h1>Mission</h1><br/>
                                <p>To grow the business together with clients by providing enhanced services and wide delivery channel to end-users.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.container4}>
                <div className={style.cont4}>
                <div className={style.content3}>
                    <h1>DSI Culture</h1>
                    <img src={line2} alt=""/>
                    <p>Our commitment to innovation depends on everyone being comfortable sharing ideas and opinions. Every employee is a hands-on contributor, and everyone wears several hats. Because we believe that each DSI employee is an equally important part of our success.</p><br/>
                    <p>We deeply understand that the average working person spends at least eight hours or even more, so we spend one third even half of our lives to work in a day. therefore we strive to provide a fun and positive environment in addition to a wide range of benefits to provide safety so they can enjoy working at Dwidasa Samsara Indonesia.</p>
                </div>
                <img className={style.eng} src={eng} alt=""/>
                </div>
            </div>
            <div className={style.container5}>
                <div className={style.contact}>
                <h1>Contact Us</h1>
                <img src={line} alt=""/>
                </div>
                
                <div className={style.content4}>
                    <img src={map} alt="" className={style.map}/>
                    <div className={style.divs4}>
                    <div className={style.con4div}>
                        <img src={house} alt=""/>
                        <div className={style.con4cont}>
                            <h1>Alamat</h1>
                            <p>Jl. Halim Perdana Kusuma, Ring Road Bangkalan, Madura, Jawa Timur.</p>
                        </div>
                    </div>
                    <div className={style.con4div}>
                        <img src={maill} alt=""/>
                        <div className={style.con4cont}>
                            <h1>Email</h1>
                            <p>sekolahku@sch.id</p>
                        </div>
                    </div>
                    <div className={style.con4div}>
                        <img src={telefon} alt=""/>
                            <div className={style.con4cont}>
                                <h1>Telefon</h1>
                                <p>(031) 3092223</p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
export default About;