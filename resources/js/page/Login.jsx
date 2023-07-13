import React, { useContext, useEffect } from "react";
import { callbackAuth, getAuthURL } from "../api/authAPI";
import queryString from "query-string";
import { redirect } from "react-router-dom";
import { setUserContext, userContext } from "../provider/user";

export const LoginPage = () => {
    const user = useContext(userContext);
    const setUser = useContext(setUserContext);

    const getAccessToken = async (authParams) => {
        const data = await callbackAuth(authParams);
        console.log(data);
        return data;
    };

    const getUser = async () => {
        const query = queryString.parse(location.search);
        const token = await getAccessToken(query);
        localStorage.setItem("token", token)
        const { data } = await axios.get("/api/user", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
    };

    
    const login = async () => {
        const url = await getAuthURL();
        window.location.href = url;
    };

    useEffect(() => {
        getUser();
    }, []);


    return (
        <div>
            <div>ログイン</div>
            <button
                onClick={login}
            >login
            </button>
            <a href="/">home</a>
        </div>
    );
};
