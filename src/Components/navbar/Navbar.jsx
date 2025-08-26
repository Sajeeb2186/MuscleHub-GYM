"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use, useState } from "react";
import logo from "../../../public/Musclehublogo.png"
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const session=useSession();
  console.log(session);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "TrainerDashboard",
      path: "/dashboard/trainerDashboard",
    },
    {
      title: "AdminDashboard",
      path: "/dashboard/adminDashbord",
    }


    // {
    //   title: "Sign In",
    //   path: "/signin",
    // },
  ];

  // 
  
  const loginHandler = () => {
  signIn(); // opens the default login page
};



  return (
    <div>
      <nav className="  flex  relative bg-white shadow dark:bg-gray-800   ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <Image
                className="w-auto h-12 sm:h-7"
                src={logo}
                alt="LogoNai"
                width={150}
                height={200}
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="container flex items-center justify-center  mx-auto text-gray-600 capitalize dark:text-gray-300 ">
              {links?.map((link) => (
                <Link
                  className={`${
                    pathName === link.path && "text-yellow-500"
                  } mr-5 text-xl font-bold `}
                  key={link.path}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>    


     <div className="absolute top-4 right-4 ">
         {session.status === "authenticated" ? (
  <button  onClick={() => signOut()} className="bg-gray-400 pb-4  text-black px-4 py-2 rounded">
    Logout
  </button>
) : (
  <button onClick={loginHandler} className="bg-blue-500  text-white px-4 py-2 rounded">
    Login
  </button>
)}

     </div>





      </nav>
    </div>
  );
}
