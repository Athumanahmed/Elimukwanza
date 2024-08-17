import React from "react";

const Heading = ({ title1, title2 }) => {
  return (
    <div>
      <h3 className=" text-4xl font-semibold">
        {title1} <span className=" text-brightGreen">{title2}</span>
      </h3>
    </div>
  );
};

export default Heading;
