import React from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <div
      className={twMerge(`
        h-fit
        bg-gradient-to-b from-fuchsia-500
        p-6
        `)}
    >
      <div
        className="
        w-full
        mb-4
        flex
        items-center
        justify-between
        "
      >
        <div
          className="
            hidden
            md:flex
            gap-x-2
            items-center
            "
        >
          <button
            className="
                rounded-full
                bg-black
                items-center
                justify-center
                hover:opacity-75
                transition
                "
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="
                rounded-full
                bg-black
                items-center
                justify-center
                hover:opacity-75
                transition
                "
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div
          className="
        md:hidden
        flex
        gap-x-2
        items-center
        "
        >
          <button
            className="
             rounded-full
             p-2
                bg-white
                items-center
                justify-center
                hover:opacity-75
                transition
            "
          >
            <HiHome size={20} className="text-black" />
          </button>
          <button
            className="
             rounded-full
             p-2
                bg-white
                items-center
                justify-center
                hover:opacity-75
                transition
            "
          >
            <HiSearch size={20} className="text-black" />
          </button>
        </div>
        <div
          className="
        flex
        justify-between
        items-center
        gap-x-4
        "
        >
          <>
            <div>
              <Button
                className="
              bg-transparent
              text-neutral-300
              font-medium
              "
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button
                className="
              bg-white
              px-6
              py-2
              "
              >
                Sign In
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
