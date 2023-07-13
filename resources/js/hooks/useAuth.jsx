import { getUser } from "../api/authAPI";

export const useAuthUser = async () => {
    const user = await getUser();
    let isAuthed = false
     user ? isAuthed = true : isAuthed = false
    return {user, isAuthed};
};
