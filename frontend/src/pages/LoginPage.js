import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext);
    return (
        <div className=" pt-20 flex justify-center">
            <div className=" block  m-40 p-10 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={loginUser}>
                    <div className="mb-6">
                        <label className=" inline-block mb-2 text-gray-700">
                            username
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            className="block w-full px-3 py-1.5 text-base 
                    font-normal text-gray-700 bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                        />
                    </div>
                    <div className=" mb-6">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                    </div>
                    <input
                        className="px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
