import React from "react";

interface ServiceProps {
  title: String;
  icon: String;
  description: String;
}

const Service: React.FC<ServiceProps> = ({ title, icon, description }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <img src={icon.toString()} alt="" width="40" />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
};

export default Service;
