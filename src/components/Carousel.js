import React, { Component } from "react";
import Slider from "react-slick";
import left from "../images/chevron_big_left.png";
import right from "../images/chevron_big_right.png";
import imagee from "../images/imagee.png";
import quote from "../images/quote icon.png";
import line from "../images/line.png";
import style from "./carousel.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><img src={right} alt=""/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    ><img src={left} alt=""/></div>
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      className:"",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      useCSS : true,
      autoplay : true
    };
    return (
      <div className={style.slider}>
        <div className={style.heading}>
            <h1>Testimonial</h1>
            <img src={line} alt="" />
        </div>
        <Slider {...settings}>
        <div>
            <div className={style.slide}>
              <img className={style.imagee} src={imagee} alt="" />
              <div className={style.content}>
                <img src={quote} alt="" />
                <p className={style.p1}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p className={style.p2}>Connie Robertson at Google</p>
              </div>
            </div>
          </div>
          <div>
            <div className={style.slide}>
              <img className={style.imagee} src={imagee} alt="" />
              <div className={style.content}>
                <img src={quote} alt="" />
                <p className={style.p1}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p className={style.p2}>Connie Robertson at Google</p>
              </div>
            </div>
          </div>
          <div>
            <div className={style.slide}>
              <img className={style.imagee} src={imagee} alt="" />
              <div className={style.content}>
                <img src={quote} alt="" />
                <p className={style.p1}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p className={style.p2}>Connie Robertson at Google</p>
              </div>
            </div>
          </div>
          <div>
            <div className={style.slide}>
              <img className={style.imagee} src={imagee} alt="" />
              <div className={style.content}>
                <img src={quote} alt="" />
                <p className={style.p1}>
                  Est tation latine aliquip id, mea ad tale illud definitiones.
                  Periculis omittantur necessitatibus eum ad, pro eripuit
                  minimum comprehensam ne, usu cu stet prompta reformidans.
                </p>
                <p className={style.p2}>Connie Robertson at Google</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}