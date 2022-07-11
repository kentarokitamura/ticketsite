import React from "react";
import ListItem from "../components/ListItem";

let arr = [
  {
    title: "第56回法政大学工学部定期演奏会",
    body:
      "こんにちは、法政大学工学部マンドリンクラブは、第56回法政大学工学部マンドリンクラブであり、法政大学工学部マンドリンクラブである。",
    user: "HTMC",
    sheets: "15",
    cash: "1200",
    img: "https://pbs.twimg.com/media/FGGnSVQVQAQztYj?format=jpg&name=medium",
    loc: "宮地楽器ホール",
    date: "7/5",
    id: 1,
  },
  {
    title: "第56回法政大学工学部定期演奏会",
    body:
      "こんにちは、法政大学工学部マンドリンクラブは、第56回法政大学工学部マンドリンクラブであり、法政大学工学部マンドリンクラブである。",
    user: "HTMC",
    sheets: "15",
    cash: "1200",
    img: "https://pbs.twimg.com/media/ELgZuIxU0AEATgM?format=jpg&name=900x900",
    loc: "宮地楽器ホール",
    date: "7/5",
    id: 1,
  },
  {
    title: "第56回法政大学工学部定期演奏会",
    body:
      "こんにちは、法政大学工学部マンドリンクラブは、第56回法政大学工学部マンドリンクラブであり、法政大学工学部マンドリンクラブである。",
    user: "HTMC",
    sheets: "15",
    cash: "1200",
    img: "https://pbs.twimg.com/media/EoUAWAbU0AYRZd2?format=jpg&name=medium",
    loc: "宮地楽器ホール",
    date: "7/5",
    id: 1,
  },
];

const EventListPage = () => {
  return (
    <div className="pt-13">
      <div className=" relative bg-slate-900">
        <div className="bg-slate-500">
          <img
            className="   w-250 md:w-2/3  h-250   object-cover "
            src="https://img.freepik.com/free-psd/boarding-pass-or-ticket-mockup-with-shadow-overlay_173864-513.jpg?w=1380"
          />
        </div>
        <button class=" bg-white px-5 py-3 text-center font-medium  rounded-lg text-gray-600 text-4xl absolute bottom-1/4 right-1/4 shadow-md  hover:shadow-2xl">
          無料会員登録
        </button>
      </div>

      <div>
        {arr.map((data) => (
          <ListItem data={data} />
        ))}
      </div>
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
