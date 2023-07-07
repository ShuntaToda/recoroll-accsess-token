import React, { useEffect } from "react";
import { getAuthURL } from "../api/authAPI";

export const DashboardPage = () => {
    const login = async () => {
        const url = await getAuthURL();
        console.log(url);
    };

    useEffect(() => {
        login();
    }, []);

    return <div>Dashboard</div>;
};
