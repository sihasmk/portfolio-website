import React from "react";
import { BsDot } from "react-icons/bs";

interface TimelineItemProps {
  heading: string;
  subheading: string;
  date: string;
  description: string;
  bullets: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  heading,
  subheading,
  date,
  description,
  bullets,
}) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 font-bold timeline-item-title">{heading}</h4>
      <h5 className="h5 font-semibold text-gray-400">{subheading}</h5>
      <span className="text-base">{date}</span>
      {description.length > 0 && (
        <p className="timeline-text font-normal">{description}</p>
      )}
      <ul>
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <BsDot className="icon-box2" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TimelineItem;
