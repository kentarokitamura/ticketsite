import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const EventEditPage = () => {
    const params = useParams();
    console.log(params);
    const [event, setEvent] = useState(null);
    const eventId = params.id;
    console.log(eventId);
    const { authTokens } = useContext(AuthContext);
    const navigate = useNavigate();

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
    useEffect(() => {
        getEvent();
    }, [eventId]);
    let sendEvent = async (e) => {
        e.preventDefault();
        console.log(e.target.title);
        fetch(`http://127.0.0.1:8000/api/update/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access),
            },
            body: JSON.stringify({
                title: e.target.title.value,
                body: e.target.body.value,
                owner: e.target.owner.value,
                sheet: e.target.sheets.value,
                cash: e.target.cash.value,
                img: e.target.img.value,
                loc: e.target.loc.value,
                schedule: e.target.date.value,
            }),
        });

        navigate("/user");
    };

    return (
        <div className="pt-20 justify-center flex">
            {event ? (
                <div className="items-center ">
                    <form onSubmit={sendEvent}>
                        <h1>イベントのタイトル</h1>
                        <input
                            name="title"
                            type="text"
                            placeholder="Title"
                            defaultValue={event.title}
                        />
                        <h1>イベントの概要</h1>
                        <input
                            name="body"
                            type="text"
                            placeholder="body"
                            defaultValue={event.body}
                        />
                        <h1>主催者</h1>
                        <input
                            name="owner"
                            type="text"
                            placeholder="owner"
                            defaultValue={event.owner}
                        />
                        <h1>席数</h1>
                        <input
                            name="sheets"
                            type="number"
                            placeholder="sheets"
                            defaultValue={event.sheet}
                        />

                        <h1>料金</h1>
                        <input
                            name="cash"
                            type="number"
                            placeholder="cash"
                            defaultValue={event.cash}
                        />
                        <h1>画像</h1>
                        <input
                            name="img"
                            type="text"
                            placeholder="URL"
                            defaultValue={event.img}
                        />
                        <h1>場所</h1>
                        <input
                            name="loc"
                            type="text"
                            placeholder="location"
                            defaultValue={event.loc}
                        />
                        <h1>日時</h1>
                        <input
                            type="date"
                            name="date"
                            required
                            defaultValue={event.schedule}
                        />
                        <h1></h1>
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
            ) : (
                <></>
            )}
        </div>
    );
};

export default EventEditPage;
