import React, { useContext, useEffect } from "react";
import { getAuthURL } from "../api/authAPI";
import { setUserContext, userContext } from "../provider/user";

export const DashboardPage = () => {
    const user = useContext(userContext);
    const setUser = useContext(setUserContext);

    const login = async () => {
        const url = await getAuthURL();
        window.location.href = url;
    };

    useEffect(() => {
        console.log(user);
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>

            <button onClick={login}>login</button>
        </div>
    );
};
