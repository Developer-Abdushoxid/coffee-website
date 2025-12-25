import React from "react";
import "./WhyUs.css";
import Img1 from "../../assets/whyUs/img1.png";
import Img2 from "../../assets/whyUs/img2.png";
import Img3 from "../../assets/whyUs/img3.png";
import Img4 from "../../assets/whyUs/img4.png";
import aboutBlast from '../../assets/aboutImg/blast.png'

const WhyUs = () => {
  return (
    <div className="container">
      <div className="whyUsContainer">
        <img src={aboutBlast} alt="Img" className="blast"/>
        <div className="whyUsHeader">
          <h1>Why are we different?</h1>
          <p>We don't just make your coffee, we make your day!</p>
        </div>
        <div className="whyUsCards">
          <div className="whyUsCard">
            <img src={Img1} alt="Img1" />
            <h3>Supreme Beans</h3>
            <p>
              Beans that provides <br />
              great taste
            </p>
          </div>

          <div className="whyUsCard">
            <img src={Img2} alt="Img1" />
            <h3>High Quality</h3>
            <p>
            We provide the <br />
            highest quality
            </p>
          </div>

          <div className="whyUsCard">
            <img src={Img3} alt="Img1" />
            <h3>Extraordinary </h3>
            <p>
            Coffee like you have <br />
            never tasted
            </p>
          </div>

          <div className="whyUsCard">
            <img src={Img4} alt="Img1" />
            <h3>Affordable Price</h3>
            <p>
            Our Coffee prices are <br />
            easy to afford
            </p>
          </div>
        </div>
        <div className="whyUsBottom">
          <p>Great ideas start with great coffee, Lets help you achieve that</p>
          <h2>Get started today.</h2>
          <button>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
