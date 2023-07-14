import React, { useContext, useEffect } from "react";
import { getAuthURL } from "../api/authAPI";
import { setUserContext, userContext } from "../provider/user";
import { Navigate, useNavigate } from "react-router-dom";

export const DashboardPage = () => {
    const user = useContext(userContext);
    const setUser = useContext(setUserContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setUser({});
        navigate("/login");
    };
    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>logout</button>
        </div>
    );
};
