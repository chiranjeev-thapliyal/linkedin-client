import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";

export const LocalStorage = () => {
    const { token } = useContext(AuthContext);
    console.log("Im in localStorage:", token);
}

