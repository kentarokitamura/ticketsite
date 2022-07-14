import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiUser } from "react-icons/fi";

const ListItem = ({ data }) => {
  const title = data.title;
  const body = data.body;
  const user = data.user;
  const sheets = data.sheets;
  const cash = data.cash;
  const navigate = useNavigate();

  return (
    <div
      className=" z-0 m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:scale-110 hover:z-100 duration-100 "
      onClick={() => {
        navigate(`event/${data.id}`);
      }}
    >
      <div className="md:flex">
        <div className="md:shrink-0 ">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48 "
            src={data.img}
          />
          <div className="pl-1 pr-6 py-1 text-white   bg-gray-500 opacity-0.5">
            {data.date}日
          </div>
        </div>

        <div className="p-8 ">
          <div className="flex items-center">
            <FiUser className="text-indigo-400 mr-1" />
            <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
              {user}
            </div>
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-slate-500">{body}</p>
          <div className="flex items-baseline">
            <FiMapPin className="text-slate-500" />
            <p className="ml-1 mt-2  text-slate-500">{data.loc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
