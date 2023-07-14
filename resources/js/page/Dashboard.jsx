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
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="">
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <img src={user.avatar} alt="" />
            </div>
            <button onClick={logout}>logout</button>
        </div>
    );
};
