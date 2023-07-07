import { getUser } from "../api/authAPI";

export const useAuthUser = async () => {
    const user = await getUser();
    return user;
};
