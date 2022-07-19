import React from "react";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthtokens] = useState(() =>
        localStorage.getItem("authToken")
            ? JSON.parse(localStorage.getItem("authToken"))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem("authToken")
            ? jwt_decode(localStorage.getItem("authToken"))
            : null
    );

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    let loginUser = async (e) => {
        e.preventDefault();

        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value,
            }),
        });
        let data = await response.json();
        if (response.status === 200) {
            setAuthtokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authToken", JSON.stringify(data));
            navigate("/");
        } else {
            alert("Something went wrong");
        }
    };

    let logoutUser = () => {
        setAuthtokens(null);
        setUser(null);
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    let signupUser = async (e) => {
        e.preventDefault();

        let response = await fetch("http://127.0.0.1:8000/api/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }),
        });
        let data = await response.json();
        if (response.status === 200) {
            loginUser(e);
        } else {
            alert("Something went wrong");
        }
    };

    let updateToken = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                refresh: authTokens ? authTokens.refresh : undefined,
            }),
        });
        let data = await response.json();
        if (response.status === 200) {
            setAuthtokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authToken", JSON.stringify(data));
        } else {
            logoutUser();
        }

        if (loading) {
            setLoading(false);
        }
    };

    let contextData = {
        loginUser: loginUser,
        user: user,
        logoutUser: logoutUser,
        authTokens: authTokens,
        signupUser: signupUser,
    };

    useEffect(() => {
        if (loading) {
            updateToken();
        }

        let fourMinutes = 1000 * 600 * 4;
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken();
            }
        }, fourMinutes);
        return () => clearInterval(interval);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
