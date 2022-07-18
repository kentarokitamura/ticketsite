import React, { useContext } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Sidebar from "./Sidebar";

const Header = () => {
    let { user } = useContext(AuthContext);

    return (
        <div className="flex fixed justify-between  w-full  text-white z-10 bg-gray-700 py-5 opacity-0.5">
            <Link to="/">
                <div className="flex items-center pl-3">
                    <div className=" -rotate-45 pr-1 ">
                        <HiOutlineTicket className=" text-white text-2xl font-bold" />
                    </div>
                    <div className="font-bold  text-2xl w-20 ">MyPass</div>
                </div>
            </Link>

            <div className=" relative rounded-lg shadow-sm ">
                <div className="absolute  inset-y-0 pl-3 flex items-center  pointer-events-none">
                    <FiSearch className=" text-slate-500" />
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    className="font-sans block text-sm pl-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg"
                />
            </div>
            {user && <Link to="user"> Hi {user.username}</Link>}
            <div className="px-6 mx-2">
                <Sidebar />
            </div>
        </div>
    );
};

export default Header;
