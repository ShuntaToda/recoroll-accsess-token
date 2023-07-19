import React, { useContext, useEffect } from "react";
import { callbackAuth, getAuthURL, logout } from "../api/authAPI";
import queryString from "query-string";
import { redirect } from "react-router-dom";
import { setUserContext, userContext } from "../provider/user";
import logo from "../../images/logos/logo.svg";
import googleLogo from "../../images/oauth/btn_google_signin_light_normal_web.png";

export const LoginPage = () => {
    const login = async () => {
        const url = await getAuthURL();
        window.location.href = url;
    };

    return (
        <div>
            <div className="flex justify-center items-center mt-16">
                <img src={logo} className="w-72"></img>
            </div>
            <div className="flex justify-center">
                <div className="gradation-border rounded w-2/3 m-auto mt-10">
                    <div className="gradation-text text-center text-3xl font-bold border-b pb-3">
                        Login
                    </div>
                    <div className="py-10">
                        <div className="flex justify-center " onClick={login}>
                            <img
                                className="w-4.5 h-4.5"
                                src={googleLogo}
                                alt="google logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
