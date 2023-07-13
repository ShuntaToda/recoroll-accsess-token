import "./bootstrap";
import { createRoot } from "react-dom/client";
import { router } from "./routes";
import React, { useEffect, useState } from "react";
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
import { UserProvider } from "./provider/user";
import { useAuthUser } from "./hooks/useAuth";

const App = () => {
    const [user, setUser] = useState({});
    const [isAuthed, setIsAuthed] = useState(false);

    // const checkUser = async () => {
    //     const { user, isAuthed } = await useAuthUser();
    //     setUser(user);
    //     setIsAuthed(isAuthed);
    //     return isAuthed;
    // };

    useEffect(() => {
        const fetchData = async () => {
            const { user, isAuthed } = await useAuthUser();
            console.log(user, isAuthed);
            setIsAuthed(isAuthed);
        };
        fetchData();
    }, []);

    const RouteAuthGuard = () => {
        console.log(user, isAuthed);
        if (false) {
            console.log("isAuthed false");
            return <Navigate to="/login" replace />;
        } else {
            console.log("isAuthed true");
            return <></>;
        }
    };

    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <RouteAuthGuard>
                                <Route
                                    path="/"
                                    element={<DashboardPage />}
                                ></Route>
                            </RouteAuthGuard>
                        }
                    ></Route>
                    <Route
                        path="/auth/google/callback"
                        element={<LoginPage />}
                    ></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
