import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

import { services } from "../../lib/services";
import ServiceCard from "../cards/ServiceCard";

const Service = ({ service }) => {
  // console.log(services);
  return (
    <div className="mt-10 min-h-screen">
      <SectionTitle
        subHeading={"Service"}
        heading={"Our Service Area"}
        describe={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      ></SectionTitle>

      <div className="container mx-auto mt-12 grid  grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
