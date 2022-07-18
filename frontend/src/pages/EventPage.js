import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const EventPage = ({ id }) => {
    const params = useParams();
    const { authTokens } = useContext(AuthContext);
    const [event, setEvent] = useState(null);
    const [seat, setSeat] = useState(null);
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
        console.log(data);
    };

    let getSeat = async () => {
        if (eventId === "new") return;
        let response = await fetch(
            `http://127.0.0.1:8000/api/seat/${eventId}`,
            {
                method: "GET",
            }
        );
        let data = await response.json();
        setSeat(data);
        console.log(data);
    };

    useEffect(() => {
        getEvent();
        getSeat();
    }, [eventId]);
    let buyTicket = async (e) => {
        e.preventDefault();
        let id = e.target.getAttribute("value");

        let targetSeat = seat[id];

        let response = await fetch(`http://127.0.0.1:8000/api/buy/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access),
            },
            body: JSON.stringify({
                schedule: event.schedule,
                sheet: event.sheet - 1,
                ...targetSeat,
                seat_status: "BOOKED",
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

                    {seat ? (
                        <div className=" grid grid-cols-12 gap-4 p-8">
                            {seat.map((s, i) => (
                                <div
                                    onClick={
                                        s.seat_status === "BOOKED"
                                            ? null
                                            : buyTicket
                                    }
                                    className={`  h-10 w-20 rounded-lg shadow-sm text-center text-2xl text-bold   ${
                                        s.seat_status === "Confirmed"
                                            ? "bg-orange-300"
                                            : "bg-slate-900"
                                    }  `}
                                    value={i}
                                >
                                    {s.seat_name}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>no seat info </>
                    )}
                </div>
            ) : (
                <div>hello</div>
            )}
        </>
    );
};

export default EventPage;
