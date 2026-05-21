import { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { loginApi } from "../../api/authApi";

import {
  setUser,
} from "../../features/auth/authSlice";

const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data =
        await loginApi(formData);

      dispatch(setUser(data.user));

      if (
        data.user.role === "admin"
      ) {
        navigate("/admin/dashboard");
      } else {
        navigate(
          "/student/dashboard"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT */}
      <div className="w-1/2 bg-gradient-to-br from-black to-gray-800 text-white flex flex-col justify-center px-20">

        <h1 className="text-6xl font-bold leading-tight">
          Learn Japanese
          <br />
          Smarter.
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Master Japanese with
          interactive lessons,
          vocabulary,
          flashcards,
          quizzes,
          and games.
        </p>

      </div>


      {/* RIGHT */}
      <div className="w-1/2 flex justify-center items-center ">

        <form
          onSubmit={handleSubmit}
          className="w-[450px]"
        >

          <h1 className="text-5xl font-bold mb-10">
            Login
          </h1>

          <input
  type="email"
  name="email"
  placeholder="Email"
  onChange={handleChange}
  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 p-4 rounded-xl mb-5 outline-none"
/>

          <input
  type="password"
  name="password"
  placeholder="Password"
  onChange={handleChange}
  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 p-4 rounded-xl mb-5 outline-none"
/>

          <button className="w-full bg-black text-white py-4 rounded-xl text-lg">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;