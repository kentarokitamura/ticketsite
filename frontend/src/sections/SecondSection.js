import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const SecondSection = ({ data }) => {
    console.log(data);
    return (
        <div className="mb-13">
            <div></div>

            <div className="grid grid-cols-3 gap-4  place-content-center   ">
                {data.map((d) => (
                    <Link to={`/event/${d.id}`}>
                        <EventCard data={d} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SecondSection;
