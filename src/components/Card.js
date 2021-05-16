import React, { Component } from 'react';
import style from "./card.module.css";
import face from "../images/Facebook.png";
import insta from "../images/Instagram.png";
import twitter from "../images/Twitter.png";

export default class Card extends Component {
    
    render() {
        const Style = {margin : "12px"};
        return (
            <div className={style.card} style={Style}>
                <img src={this.props.src} alt="" className={style.portrait}/>
                <h2><span>{this.props.title}</span></h2>
                <h1>{this.props.name}</h1>
                <div className={style.social}>
                    <img src={face} alt =""/>
                    <img src = {insta} alt=""/>
                    <img src={twitter} alt=""/>
                </div>
            </div>
        )
    }
}