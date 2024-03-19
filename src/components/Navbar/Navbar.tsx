"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { primaryMenuItems } from "@/constants";
import { CustomButton } from "@/components";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (   
      <nav className="mx-auto h-[84px] bg-white max-w-[1119px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="/airbook-logo.png"
                alt="Air Book"
                className="object-contain"
                width={153}
                height={50}
              />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {/* large device menu */}
                {primaryMenuItems?.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="text-[#1E1E1E] font-medium text-lg transition hover:text-gray-900/75"
                      href={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <CustomButton
                title="Sign In"
                containerStyles="bg-gradient-to-r from-[#006CE4] to-[#006ae490] rounded-lg px-3 md:px-10 py-2 text-white font-medium text-base md:text-2xl"
                btnType="button"
              />
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* small devices */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-end p-2 gap-2 text-sm bg-slate-100"> 
                {primaryMenuItems?.map((item) => (
                  <li key={item.title}>
                    <Link
                      className="text-[#1E1E1E] font-medium text-lg transition hover:text-gray-900/75"
                      href={item.url}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </nav>
    
  );
};

export default Navbar;
