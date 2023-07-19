import "./bootstrap";
import { createRoot } from "react-dom/client";
import React, { useContext, useEffect, useState } from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import { DashboardPage } from "./page/Dashboard";
import { LoginPage } from "./page/Login";
import { getUser } from "./api/authAPI";
import { UserProvider, setUserContext } from "./provider/user";
import { useAuthUser } from "./hooks/useAuth";
import { CallBackPage } from "./page/CallBackPage";
import { Loading } from "./page/Loading";

const App = () => {
    const [loginUser, setLoginUser] = useState(null);
    const [isAuthed, setIsAuthed] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { user, isAuthed } = await useAuthUser();
            setIsAuthed(isAuthed);
            setLoginUser(user);
        };
        fetchData();
    }, []);

    const RouteAuthGuard = ({ component }) => {
        const setUser = useContext(setUserContext);

        useEffect(() => {
            if (isAuthed === true) {
                setUser(loginUser);
            }
        }, [isAuthed]);

        if (isAuthed == null) {
            return <Loading></Loading>;
        } else if (isAuthed == true) {
            console.log("isAuthed true");
            return <>{component}</>;
        } else {
            console.log("isAuthed false");
            return <Navigate to="/login" replace />;
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RouteAuthGuard
                            component={<DashboardPage />}
                        ></RouteAuthGuard>
                    }
                ></Route>
                <Route
                    path="/auth/google/callback"
                    element={<CallBackPage />}
                ></Route>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);
