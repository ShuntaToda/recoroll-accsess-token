import { createBrowserRouter, redirect } from "react-router-dom";
import { LoginPage } from "./page/Login";
import { DashboardPage } from "./page/Dashboard";
import { useAuthUser } from "./hooks/useAuth";

const guardLoader = async () => {
    const user = await useAuthUser();
    return user ? true : redirect("/login");
};

const guestLoader = async () => {
    const user = await useAuthUser();
    return user ? redirect("/") : true;
};

export const router = createBrowserRouter([
    {
        path: "login",
        element: <LoginPage></LoginPage>,
        // loader: guestLoader,
    },
    {
        path: "/",
        element: <DashboardPage></DashboardPage>,
        // loader: guardLoader,
    },
    {
        path: "/auth/google/callback",
        element: <LoginPage></LoginPage>,
        // loader: guardLoader,
    },
]);
