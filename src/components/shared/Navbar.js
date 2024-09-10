import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const navItem = [
    {
      _id: 1,
      title: "Home",
      path: "/",
    },
    {
      _id: 2,
      title: "About",
      path: "/about",
    },
    {
      _id: 3,
      title: "Services",
      path: "/services",
    },
    {
      _id: 4,
      title: "Blog",
      path: "/blog",
    },
    {
      _id: 5,
      title: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <div className="bg-slate-200">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                {navItem.map((item) => (
                  <Link
                    className="font-semibold hover:text-primary duration-300"
                    key={item._id}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo4.svg" height={50} width={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            {navItem.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                key={item._id}
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
            <IoCartOutline className="text-xl  " />
            <IoIosSearch className="text-xl " />
            <a className="btn btn-outline btn-primary ">Appointment</a>
            <Link href="/login" className="btn btn-primary ">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /**<div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */
}
