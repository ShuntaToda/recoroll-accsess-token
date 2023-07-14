import axios from "axios";

export const getUser = async () => {
    if (localStorage.getItem("token") == null) {
        console.log("token nothing");
    } else {
        console.log("token OK");
    }
    try {
        const { data } = await axios.get("/api/user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getAuthURL = async () => {
    const { data } = await axios.get("/api/auth/google");
    console.log(data);
    return data;
};
export const callbackAuth = async (authParams) => {
    const { data } = await axios.post("/api/auth/google/callback", authParams);
    console.log(data);
    return data;
};

export const logout = async () => {
    const { data } = await axios.post("/api/logout");
    console.log(data);
    return data;
};
