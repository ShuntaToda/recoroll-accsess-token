import axios from "axios";

export const getUser = async () => {
    // data = "a";
    let { data } = await axios.get("/api/user");
    console.log(data);
    return data;
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
