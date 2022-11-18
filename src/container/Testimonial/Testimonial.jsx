import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Testimonial.scss";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clickHandler = (index) => setCurrentIndex(index);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data.reverse());
    });
  }, []);

  const reco = testimonials[currentIndex];

  return (
    <>
      <h2 className="head-text app__testimonial-title">TESTIMONIALS</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(reco.imageurl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{reco.feedback}</p>
              <div>
                <h4 className="bold-text">{reco.name}</h4>
                <h5 className="p-text">{reco.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                clickHandler(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                clickHandler(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AppWrap(Testimonial, "testimonials");
