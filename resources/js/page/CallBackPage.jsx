import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { callbackAuth } from "../api/authAPI";
import { Navigate, useNavigate } from "react-router-dom";

import logo from "../../images/logos/logo.svg";
import googleLogo from "../../images/oauth/btn_google_signin_light_normal_web.png";

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
    return (
        <div>
            <div className="flex justify-center items-center mt-16">
                <img src={logo} className="w-72"></img>
            </div>
            <div className="flex justify-center">
                <div className="gradation-border rounded w-2/3 m-auto mt-10">
                    <div className="gradation-text text-center text-3xl font-bold  pb-3">
                        Loading...
                    </div>
                </div>
            </div>
        </div>
    );
};
