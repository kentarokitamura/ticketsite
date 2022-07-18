import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../context/AuthContext";

const CreateEventPage = () => {
    const navigate = useNavigate();

    let { authTokens } = useContext(AuthContext);

    let sendEvent = async (e) => {
        e.preventDefault();
        console.log(e.target.title);
        fetch(`http://127.0.0.1:8000/api/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access),
            },
            body: JSON.stringify({
                title: e.target.title.value,
                body: e.target.body.value,
                owner: e.target.owner.value,
                sheets: e.target.sheets.value,
                cash: e.target.cash.value,
                img: e.target.img.value,
                loc: e.target.loc.value,
                date: e.target.date.value,
            }),
        });
        console.log("first");
        navigate("/");
    };

    return (
        <div className="pt-20 justify-center flex">
            <div className="items-center ">
                <form onSubmit={sendEvent}>
                    <h1>イベントのタイトル</h1>
                    <input name="title" type="text" placeholder="Title" />
                    <h1>イベントの概要</h1>
                    <input name="body" type="text" placeholder="body" />
                    <h1>主催者</h1>
                    <input name="owner" type="text" placeholder="owner" />
                    <h1>席数</h1>
                    <input name="sheets" type="number" placeholder="sheets" />

                    <h1>料金</h1>
                    <input name="cash" type="number" placeholder="cash" />
                    <h1>画像</h1>
                    <input name="img" type="text" placeholder="URL" />
                    <h1>場所</h1>
                    <input name="loc" type="text" placeholder="location" />
                    <h1>日時</h1>
                    <input type="date" name="date" required />
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
        </div>
    );
};

export default CreateEventPage;
