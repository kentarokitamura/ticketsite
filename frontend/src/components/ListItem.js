import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiUser } from "react-icons/fi";


const ListItem = ({ data }) => {
    const title = data.title;
    const body = data.body;
    const user = data.owner;
    const sheets = data.sheets;
    const cash = data.cash;

    const navigate = useNavigate();

    return (
        <div
            className="relative h-screen py-48 bg-no-repeat bg-cover "
            style={{
                backgroundImage: `url('${data.img}')`,
            }}
        >
            <div className="absolute top-0 right-0 w-screen h-full backdrop-blur-lg"></div>
            <div
                className="absolute top-1/3 left-auto bg-slatea z-0 m-2 max-w-full mx-auto   rounded-xl shadow-md overflow-hidden md:max-w-screen-2xl  md:max-h-screen-2xl  hover:scale-110 hover:z-100 duration-100   "
                onClick={() => {
                    navigate(`event/${data.id}`);
                }}
            >
                <div className="md:flex ">
                    <div className="md:shrink-0 ">
                        <img
                            className="h-2  w-full object-cover md:h-max  md:w-80  "
                            src={data.img}
                        />
                        <div className="pl-1 pr-6  text-white   bg-gray-500 opacity-0.5">
                            {data.schedule}
                        </div>
                    </div>

                    <div className="p-8  bg-slatea   ">
                        <div className="flex items-center">
                            <FiUser className="text-indigo-400 mr-1" />
                            <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                                {user}
                            </div>
                        </div>
                        <a
                            href="#"
                            className="block mt-1  leading-tight font-medium text-3xl text-white hover:underline"
                        >
                            {title}
                        </a>
                        <p className="mt-2 text-white text-xl">{body}</p>
                        <div className="flex items-baseline">
                            <FiMapPin className=" text-4xl text-green-400" />
                            <p className="ml-1 mt-2  text-green-400 text-4xl">
                                {data.loc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
