import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import AuthContext from "../context/AuthContext";

const UserPage = () => {
    const [events, setEvents] = useState([]);

    const navigate = useNavigate();
    let { authTokens, loginUser, user } = useContext(AuthContext);
    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        if (user === null) {
            navigate("/login");
        }
        let response = await fetch("http://127.0.0.1:8000/api/user/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access),
            },
        });
        let data = await response.json();
        if (response.status === 200) {
            setEvents(data);
            console.log(data);
        }
    };

    return (
        <div className=" pt-20">
            <p>{user.username} page</p>
            <h1>Your Events</h1>
            <div className="grid grid-cols-3 gap-4  place-content-center   ">
                {events.map((d) => (
                    <Link to={`edit/${d.id}`}>
                        <EventCard data={d} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserPage;
