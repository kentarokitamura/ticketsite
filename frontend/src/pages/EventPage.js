import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventPage = ({ id }) => {
    const params = useParams();
    const [event, setEvent] = useState(null);
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
    useEffect(() => {
        console.log(event);
    }, [event]);
    return (
        <>
            {event ? (
                <div className=" pt-19">
                    <div className=" bg-slate-600 flex justify-center items-center pt-20">
                        <img src={event.img} className=" h-96  m-4" />
                    </div>
                    <h1>{event.title}</h1>
                    <p>{event.body}</p>
                </div>
            ) : (
                <div>hello</div>
            )}
        </>
    );
};

export default EventPage;
