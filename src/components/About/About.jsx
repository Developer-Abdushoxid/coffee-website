import React from 'react';
import './About.css'
import aboutLeft from '../../assets/aboutImg/aboutLeft.png'

const About = () => {
  return (
    <div>
        <div className="about-container">
            <div className="about-left">
                <h2>Discover the best coffee</h2>
                <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                <button>Learn More</button>
            </div>
            <div className="about-right">
                <img src={aboutLeft} alt="Img" />
            </div>
        </div>
    </div>
  )
}

export default About