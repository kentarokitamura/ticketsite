import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");
  const [sheets, setSheets] = useState(0);
  const [cash, setCash] = useState(0);
  const [img, setImage] = useState(
    "https://pbs.twimg.com/media/EoUAWAbU0AYRZd2?format=jpg&name=medium"
  );
  const [loc, setLoc] = useState("");
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const sendEvent = async () => {
    fetch(`/api/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        user: user,
        sheets: sheets,
        cash: cash,
        img: img,
        loc: loc,
        date: `${month}/${day}`,
      }),
    });
    console.log("first");
    //navigate("/");
  };

  return (
    <div className="pt-20 justify-center flex">
      <div className="items-center ">
        <div>
          <h1>イベントのタイトル</h1>
          <input onChange={(e) => setTitle(e.value)} value={title} />
          <h1>イベントの概要</h1>
          <input onChange={(e) => setBody(e.value)} value={body} />
          <h1>主催者</h1>
          <input onChange={(e) => setUser(e.value)} value={user} />
          <h1>席数</h1>
          <input onChange={(e) => setSheets(e.value)} value={sheets} />

          <h1>料金</h1>
          <input onChange={(e) => setCash(e.value)} value={cash} />
          <h1>画像</h1>
          <input onChange={(e) => setImage(e.value)} value={img} />
          <h1>場所</h1>
          <input onChange={(e) => setLoc(e.value)} value={loc} />
        </div>
        <div className="flex ">
          <h1>月</h1>
          <input onChange={(e) => setMonth(e.value)} value={month} />
          <h1>日</h1>
          <input onChange={(e) => setDay(e.value)} value={day} />
        </div>
        <button className=" p-3 border bg-slate-300" onClick={sendEvent()}>
          sumbit
        </button>
      </div>
    </div>
  );
};

export default CreateEventPage;
