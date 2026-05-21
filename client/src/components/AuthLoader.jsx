import { useEffect } from "react";

import { useDispatch } from "react-redux";

import {
  setUser,
  stopLoading,
} from "../features/auth/authSlice";

import {
  getCurrentUserApi,
} from "../api/authApi";

const AuthLoader = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const loadUser = async () => {
      try {

        const data =
          await getCurrentUserApi();

        dispatch(setUser(data.user));

      } catch (error) {

        dispatch(stopLoading());

      }
    };

    loadUser();

  }, []);

  return null;
};

export default AuthLoader;