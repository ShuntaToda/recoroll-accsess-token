import React, { useContext, useEffect } from "react";
import { callbackAuth } from "../api/authAPI";
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
        const { data } = await axios.get("/api/user", {
            headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
    };
    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        // if (user.id) window.location.href = "/";
    }, [user]);

    return (
        <div>
            <div>ログイン中</div>
            <button
                onClick={() => {
                    console.log(user);
                }}
            >
                console user
            </button>
        </div>
    );
};
