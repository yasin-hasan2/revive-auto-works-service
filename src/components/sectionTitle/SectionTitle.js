import React from "react";

const SectionTitle = ({ subHeading, heading, describe }) => {
  return (
    <div className="mx-auto my-10 text-center md:w-7/12 space-y-4">
      <p className="text-primary text-xl font-bold mb-3">{subHeading}</p>
      <h3 className="text-5xl font-bold"> {heading} </h3>
      <p className="text-base font-light text-[#737373]"> {describe} </p>
    </div>
  );
};

export default SectionTitle;
