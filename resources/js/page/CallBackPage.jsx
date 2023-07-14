import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { callbackAuth } from "../api/authAPI";
import { Navigate, useNavigate } from "react-router-dom";

export const CallBackPage = () => {
    const [token, setToken] = useState("");

    const getToken = async () => {
        const query = queryString.parse(location.search);
        setToken(await callbackAuth(query));
    };

    useEffect(() => {
        getToken();
    }, []);

    useEffect(() => {
        if (token !== null) {
            localStorage.setItem("token", token);
            window.location.href = "/";
        }
    }, [token]);

    // const Navigator = () => {
    //     const token = localStorage.getItem("token");

    //     if (token == null) {
    //         console.log(token);
    //         return <div>loading...</div>;
    //     } else {
    //         console.log(token);
    //         // return <Navigate to="/" replace></Navigate>;
    //     }
    // };
    return (
        <>
            <div>CallBackPage</div>
            {/* <Navigator /> */}
        </>
    );
};
