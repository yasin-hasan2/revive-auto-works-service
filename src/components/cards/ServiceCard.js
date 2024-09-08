import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 h-96 mx-auto shadow-xl">
        <figure>
          <Image src={img} height={120} width={430} alt="title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <div className="card-actions justify-between items-center">
            <h6 className="text-primary font-semibold">Price: ${price} </h6>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ServiceCard;
