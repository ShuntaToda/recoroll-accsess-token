import React, { useEffect } from "react";
import { callbackAuth } from "../api/authAPI";
import queryString from "query-string";
import { redirect } from "react-router-dom";

export const LoginPage = () => {
    const socialLogin = async (authParams) => {
        const data = await callbackAuth(authParams);
        console.log(data);
        return data;
    };

    const getUser = async () => {
        const { data } = await axios.get("/api/user");
        console.log(data);
    };
    useEffect(() => {
        const query = queryString.parse(location.search);
        socialLogin(query);
        getUser();
    }, []);
    return <div>Login</div>;
};
