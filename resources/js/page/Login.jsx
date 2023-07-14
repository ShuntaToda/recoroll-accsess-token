import React, { useContext, useEffect } from "react";
import { callbackAuth, getAuthURL } from "../api/authAPI";
import queryString from "query-string";
import { redirect } from "react-router-dom";
import { setUserContext, userContext } from "../provider/user";

export const LoginPage = () => {
    const login = async () => {
        const url = await getAuthURL();
        window.location.href = url;
    };

    return (
        <div>
            <div>ログイン</div>
            <button onClick={login}>login</button>
            <a href="/">home</a>
        </div>
    );
};
