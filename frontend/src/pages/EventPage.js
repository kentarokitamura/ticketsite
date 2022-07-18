import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const EventPage = ({ id }) => {
    const params = useParams();
    const { authTokens } = useContext(AuthContext);
    const [event, setEvent] = useState(null);
    const navigate = useNavigate();
    const eventId = params.id;
    let getEvent = async () => {
        if (eventId === "new") return;
        let response = await fetch(
            `http://127.0.0.1:8000/api/events/${eventId}`,
            {
                method: "GET",
            }
        );
        let data = await response.json();
        setEvent(data);
    };
    useEffect(() => {
        getEvent();
    }, [eventId]);
    let buyTicket = async (e) => {
        e.preventDefault();
        let response = await fetch(`http://127.0.0.1:8000/api/buy/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access),
            },
            body: JSON.stringify({
                schedule: event.schedule,
                sheet: event.sheet - 1,
            }),
        });
        let data = await response.json();
        navigate("/");
    };

    return (
        <>
            {event ? (
                <div className=" pt-19">
                    <div className=" bg-slate-600 flex justify-center items-center pt-20">
                        <img src={event.img} className=" h-96  m-4" />
                    </div>
                    <h1>{event.title}</h1>
                    <p>{event.body}</p>
                    {event.cash === 0 ? <p>無料</p> : <p>{event.cash}円</p>}

                    <p>{event.sheet}席</p>

                    <button onClick={buyTicket}>buy</button>
                </div>
            ) : (
                <div>hello</div>
            )}
        </>
    );
};

export default EventPage;
