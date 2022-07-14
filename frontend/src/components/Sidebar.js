import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    let { user, logoutUser } = useContext(AuthContext);
    const logout = () => {
        setShowSidebar(false);
        logoutUser();
    };
    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-gray-600 items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#ffffff"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-0 right-0 w-[35vw] bg-white p-10 pl-20 text-gray-600 fixed h-1/2 z-40  ease-in-out duration-300 ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <h3 className="mt-20 text-4xl font-semibold text-gray-600">
                    {user ? (
                        <p onClick={logout}>Logout</p>
                    ) : (
                        <div>
                            <div>
                                <Link
                                    to="login"
                                    onClick={() => {
                                        setShowSidebar(!showSidebar);
                                    }}
                                >
                                    Login
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="signup"
                                    onClick={() => {
                                        setShowSidebar(!showSidebar);
                                    }}
                                >
                                    Signup
                                </Link>
                            </div>
                        </div>
                    )}
                </h3>
            </div>
        </>
    );
};

export default Sidebar;
