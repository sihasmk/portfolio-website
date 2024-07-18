import React from "react";

interface TestimonialProps {
  name: String;
  phone_number: String;
  testimonial: String;
  role: String;
  organization: String;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  phone_number,
  testimonial,
  role,
  organization,
}) => {
  return (
    <li className="testimonials-item">
      <div className="content-card">
        <div className="flex justify-between">
          <div>
            <h4 className="h4 font-semibold testimonials-item-title">{name}</h4>
            <h5 className="h5 text-gray-500 hover:text-blue-700">
              {phone_number}
            </h5>
          </div>
          <div className=" text-right">
            <h4 className="h4 text-gray-400 testimonials-item-title">
              {organization}
            </h4>
            <h5 className="h5 text-gray-500 font-normal hover:text-blue-700">
              {role}
            </h5>
          </div>
        </div>
        <div className="testimonials-text">
          <p>{testimonial}</p>
        </div>
      </div>
    </li>
  );
};

export default Testimonial;
