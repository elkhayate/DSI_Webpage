import React from 'react';
import Card from "./Card";
import style from "./abouts.module.css";
import sung from "../images/sung.png";
import chemise from "../images/chemise.png";
import cuate from "../images/cuate.png";
import line from "../images/line.png";
import Footer from "./Footer";
import a1 from "../images/circle-box.png"
import a2 from "../images/circle-box (1).png";
import a3 from "../images/circle-box (2).png";
import a4 from "../images/circle-box (3).png";
function Abouts() {
    return (
        <section>
            <div className={style.container}/>
            <div className={style.container1}>
                <h1 className={style.title}>Alone is a vision<span> <br/>together we make it reality</span></h1>
                <img src={cuate} alt="" />
            </div>
            <div className={style.container2}/>
            <div className={style.container3}>
                <h1>Manajemen</h1>
                <img src={line} alt=""/>
                <div className={style.cards3}>
                    <Card src={sung} title="President Director" name="Rodney Stratton"/>
                    <Card src={chemise} title="Director" name="Rodney Stratton"/>
                </div>
            </div>
            <div className={style.container4}>
                <h1>Consultant</h1>
                <img src={line} alt="" />
                <div className={style.cards4}>
                    <Card src={a1} name ="Rodney Stratton" title="Project Manager"/>
                    <Card src={a2} name ="Rodney Stratton" title="Business Analyst"/>
                    <Card src={a3} name ="Rodney Stratton" title="Consultant"/>
                    <Card src={a4} name ="Rodney Stratton" title="Consultant"/>
                </div>
            </div>
            <div className={style.container5}>
                <h1>Mobile Specialist</h1>
                <img src={line} alt ="" />
                <div className={style.cards5}>
                    <Card src={a1} name ="Rodney Stratton" title="Project Manager"/>
                    <Card src={a2} name ="Rodney Stratton" title="Business Analyst"/>
                    <Card src={a3} name ="Rodney Stratton" title="Consultant"/>
                    <Card src={a4} name ="Rodney Stratton" title="Consultant"/>
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default Abouts;