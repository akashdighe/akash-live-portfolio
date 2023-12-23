import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Invest time upfront to grasp the intricacies of your client's needs, preferences, and objectives. A comprehensive understanding sets the foundation for a successful project",
    },
    {
      img: profilePic2,
      review:
        "Establish a communication strategy that keeps clients informed about project milestones, challenges, and any adjustments. Proactive updates foster transparency and trust",
    },
    {
      img: profilePic3,
      review:
        "Beyond meeting the specified requirements, strive to provide additional value. This could involve suggesting optimizations, innovative features, or solutions that enhance the overall quality of the deliverable",
    },
    {
      img: profilePic4,
      review:
        "Implement thorough quality assurance processes to identify and rectify any potential issues before the final delivery. High-quality work contributes significantly to client satisfaction",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
