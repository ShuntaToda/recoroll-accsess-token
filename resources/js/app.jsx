import "./bootstrap";
import { createRoot } from "react-dom/client";
import { router } from "./routes";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { DashboardPage } from "./page/Dashboard";
import { LoginPage } from "./page/Login";
import { getUser } from "./api/authAPI";

const App = () => {
    const [user, setUser] = useState({});

    const checkUser = async () => {
        const user = await getUser();
        console.log(user);
        setUser(user);
    };
    useEffect(() => {
        checkUser();
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />}></Route>
                <Route
                    path="/auth/google/callback"
                    element={<LoginPage />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <App />
    // <React.StrictMode>
    // </React.StrictMode>
);
