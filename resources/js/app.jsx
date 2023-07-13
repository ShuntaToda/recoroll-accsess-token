import "./bootstrap";
import { createRoot } from "react-dom/client";
import { router } from "./routes";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import { DashboardPage } from "./page/Dashboard";
import { LoginPage } from "./page/Login";
import { getUser } from "./api/authAPI";
import { UserProvider } from "./provider/user";
import { useAuthUser } from "./hooks/useAuth";

const App = () => {
    const authUser = useAuthUser()

    const [user, setUser] = useState({});
    const [isAuthed, setIsAuthed] = useState(false)

    const checkUser = async () => {
        const { user, isAuthed } = await useAuthUser();
        setUser(user);
        setIsAuthed(isAuthed);
        return isAuthed
    };

    const RouteAuthGuard = () => {
        //ログイン状態の確認が完了していればログインチェックさせる

        // useEffect(async() => {
        //     await checkUser()
        // },[])
        // console.log(isAuthed)

        // const checkLogin = async() => {
        //     return await checkUser()
        // }

        console.log(authUser)
        if (true) {
            return <></>;
        } else {
            return <Navigate to="/login" replace />;
        }
    };

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<RouteAuthGuard></RouteAuthGuard>}>
                        <Route path="/" element={<DashboardPage />}></Route>
                    </Route>
                    <Route
                        path="/auth/google/callback"
                        element={<LoginPage />}
                    ></Route>
                    <Route
                        path="/login"
                        element={<LoginPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <App />
    // <React.StrictMode>
    // </React.StrictMode>
);
