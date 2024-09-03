import Image from "next/image";
import React from "react";
import aboutPerson from "/public/assets/images/about_us/person.jpg";
import aboutParts from "/public/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="text-slate-900">
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <Image
              className="rounded-xl "
              alt="aboutImg"
              src={aboutPerson}
              height={500}
              width={460}
            />
            <Image
              className="rounded-xl hidden lg:flex absolute bottom-20 right-24 border-8 border-white "
              alt="aboutImg"
              src={aboutParts}
              height={332}
              width={327}
            />
          </div>
          <div className="space-y-4 mb-5 mt-10 lg:mt-0.5">
            <h1 className="text-primary text-xl font-bold">About</h1>
            <h3 className="text-5xl font-bold pb-4">
              We are qualified <br /> & of experience <br /> in this field
            </h3>
            <div className="text-base font-light text-[#737373] space-y-3 text-justify pr-5">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randoms words which do not look even
                slightly believable.{" "}
              </p>
              <p>
                the majority have suffered alteration in some form, by injected{" "}
                humour, or randoms words which do not look even slightly
                believable.
              </p>
            </div>
            <button className="btn btn-primary ">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
