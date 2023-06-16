import { postlogin } from "../../services/ApiServices/Login/loginService";
import { create } from "zustand";
import { getUser, removeUser, setUser } from "./events";

export const useLogin = create((set) => ({
  user: "",
  loading: false,
  isLoggined: getUser() || false,

  // logout
  setLogout: () => {
    removeUser();
    set((state) => ({ ...state, isLoggined: false }));
  },
  // login api call
  callLoginApi: async (req) => {
    set((state) => ({ ...state, loading: true }));
    const data = await postlogin(req);
    if (data.msg === "success") {
      setUser(req.username);
      set((state) => ({
        ...state,
        isLoggined: true,
        loading: false,
        user: data,
      }));
    } else {
      set((state) => ({ ...state, loading: false }));
    }
  },
}));
