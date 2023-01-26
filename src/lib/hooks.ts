import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import { LoginModalContext } from "./contexts/loginModalContext";

export const useAuthUser = () => useContext(AuthContext);
export const useLoginModal = () => useContext(LoginModalContext);
