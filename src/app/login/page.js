"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoFacebook, IoLogoGoogle, IoLogoLinkedin } from "react-icons/io5";

const page = () => {
  const handleLogin = async () => {};

  return (
    <div className=" container mx-auto py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="log In"
          />
        </div>
        <div className="border-2 rounded-xl p-12">
          <h2 className="text-2xl font-semibold text-primary text-center mb-12">
            Sign In
          </h2>
          <form onSubmit={handleLogin} action="">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="your email"
              className=" my-4 input input-bordered w-full "
            />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className=" my-4 input input-bordered w-full "
            />
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Sign In
            </button>
          </form>
          <div>
            <h6 className="text-center my-12">or sign In with ...</h6>
            <div className="flex gap-3 justify-center">
              <button className="btn flex items-center justify-center text-2xl">
                <IoLogoGoogle></IoLogoGoogle>
              </button>
              <button className="btn flex items-center justify-center text-2xl">
                <IoLogoFacebook></IoLogoFacebook>
              </button>
              <button className="btn flex items-center justify-center text-2xl">
                <IoLogoLinkedin></IoLogoLinkedin>
              </button>
            </div>
            <div>
              <h6 className="text-center mt-8">
                Not have an account?{" "}
                <Link
                  className="text-primary my-2 font-semibold "
                  href={"/signup"}
                >
                  {" "}
                  Sign Up{" "}
                </Link>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
