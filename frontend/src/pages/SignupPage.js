import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignupPage = () => {
    let { signupUser } = useContext(AuthContext);
    return (
        <div className=" pt-20  flex justify-center ">
            <div className=" block m-40 p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form onSubmit={signupUser}>
                    <div className="grid grid-cols-1 gap-4">
                        <div className=" mb-6">
                            <input
                                type="text"
                                placeholder="username"
                                name="username"
                                className="
                block
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
                    </div>
                    <div className=" mb-6">
                        <input
                            type="email"
                            name="email"
                            className=" block
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
                            placeholder="Email address"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            type="password"
                            name="password"
                            className=" block
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
                            placeholder="Password"
                        />
                    </div>

                    <input
                        className="
            w-full
            px-6
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

export default SignupPage;
