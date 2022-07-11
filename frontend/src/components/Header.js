import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="flex fixed justify-between  w-full  text-white z-10 bg-gray-700 py-5 ">
      <div className="flex items-center pl-3">
        <div className=" -rotate-45 pr-1">
          <HiOutlineTicket className=" text-white scale-100 font-bold" />
        </div>
        <div className="font-bold  w-20 ">MyPass</div>
      </div>
      <div className=" border-2 border-white px-6  rounded-lg flex items-center ">
        <div className="pr-2">
          <FiSearch size={20} />
        </div>
        <input className=" py-1 text-center text-slate-500   resize-none h-8" />
      </div>

      <div className="px-6 mx-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Header;
