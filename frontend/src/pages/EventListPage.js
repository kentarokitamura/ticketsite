import React, { useContext, useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import AuthContext from "../context/AuthContext";
import FirstSection from "../sections/FirstSection";
import SecondSection from "../sections/SecondSection";

const EventListPage = () => {
    const [events, setEvents] = useState([]);
    let { authTokens, logoutUser } = useContext(AuthContext);
    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/events/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await response.json();
        if (response.status === 200) {
            setEvents(data);
        }
    };

    return (
        <div className="pt-19">
            <FirstSection data={events} />
            <SecondSection data={events} />
        </div>
    );
};

export default EventListPage;
// const [message, setMessage] = useState("");
// const [messages, setMessages] = useState([]);
// const [sheets, setSheets] = useState(0);
// const [title, setTitle] = useState("");
// // let url = `ws://${window.location.host}/ws/socet-server/`;
// let url = `ws://127.0.0.1:8000/ws/socket-server/`;
// const chatSocket = new WebSocket(url);
// useEffect(() => {
//   chatSocket.onmessage = (e) => {
//     const data = JSON.parse(e.data);
//     console.log(data);
//     setMessages(data);
//   };
// }, []);

// const sendMessage = () => {
//   chatSocket.send(
//     JSON.stringify({
//       type: "chat",
//       message: message,
//       title: title,
//       sheets: sheets,
//     })
//   );
//   setMessage("");
//   setSheets(0);
//   setTitle("");
//   chatSocket.onmessage = (e) => {
//     const data = JSON.parse(e.data);
//     console.log(data);
//     setMessages(data);
//   };
// };

// <h2> title</h2>
// <textarea
//   value={title}
//   onChange={(e) => {
//     setTitle(e.target.value);
//   }}
// />
// <h2>body</h2>
// <textarea
//   value={message}
//   onChange={(e) => {
//     setMessage(e.target.value);
//   }}
// />

// <h2>sheets</h2>
// <textarea
//   value={sheets}
//   onChange={(e) => {
//     setSheets(e.target.value);
//   }}
// />

// <button onClick={sendMessage}>send</button>
// <div>
//   {messages.map((m, index) => (
//     <div key={index}>
//       <h1> {m.title} </h1>
//       <h2>{m.body}</h2>
//     </div>
//   ))}
// </div>
// <h1>aui</h1>
