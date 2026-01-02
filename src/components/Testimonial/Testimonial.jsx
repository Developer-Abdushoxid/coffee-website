import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonial.css";

import user1 from "../../assets/testimonial/user1.png";
import user2 from "../../assets/testimonial/user2.png";
import user3 from "../../assets/testimonial/user3.png";
const testimonials = [
  {
    text: `From the very first cup, you can tell every ingredient is crafted with care. The rich aroma and smooth taste make every sip a delight. The best thing — each visit feels just as special as the first. This coffee has become a daily habit I can’t do without.`,
    name: "Jonny Thomas",
    role: "Project Manager",
    img: user1,
  },
  {
    text: `From the very first sip, you can feel the quality and care behind every cup of coffee.The rich aroma, smooth taste, and perfect balance make it a truly enjoyable experience.
    What I appreciate most is the consistency — every visit feels just as special as the first one.
    This coffee has become an essential part of my daily routine.`,
    name: "Tom Williams",
    role: "UI Designer",
    img: user2,
  },
  {
    text: `Every sip reveals the quality and care in every cup. Its rich aroma, smooth flavor, and perfect balance make it a truly enjoyable experience. The best part — every visit brings back the same feeling as the very first time. This coffee has now become an essential part of my daily routine.`,
    name: "Michael Brown",
    role: "Developer",
    img: user3,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h1 className="testimonial-title">Our coffee perfection feedback</h1>
      <p className="testimonial-subtitle">
        Our customers has amazing things to say about us
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={30}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <span className="quote">“</span>

              <p className="testimonial-text">{item.text}</p>

              <h3 className="author-name">{item.name}</h3>
              <p className="author-role">{item.role}</p>

              <img src={item.img} alt={item.name} className="author-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
