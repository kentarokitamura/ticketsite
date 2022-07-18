import { data } from "autoprefixer";
import React from "react";
import { FiPenTool } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
const EventCard = ({ data }) => {
    return (
        <div className=" relative  bg-gray-100 flex items-center justify-center py-50">
            <div className="w-lg h-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="p-4">
                    <img className="rounded-xl w-96   " src={data.img} alt="" />
                </div>
                <div className=" absolute bottom-0 w-full bg-slatea  p-6 ">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl text-white font-bold">
                            {data.title}
                        </h1>
                    </div>
                    <div className="flex space-x-6 items-center ">
                        <div className="flex space-x-2 items-bottom text-green-400">
                            <span>
                                <FiPenTool />
                            </span>
                            <span className=" font-semibold">
                                {data.sheet} 席
                            </span>
                        </div>
                        <div className="flex space-x-2 text-green-400 items-center pr-4">
                            <span>
                                <FiMessageSquare />
                            </span>
                            <span className=" font-semibold">22</span>
                        </div>
                        <div className="text-green-400">{data.owner}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
