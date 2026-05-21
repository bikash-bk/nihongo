import { useState } from "react";
import { registerApi } from "../../api/authApi";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login');

    try {
      const data = await registerApi(formData);

      console.log(data);

      alert("Registration Successful");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className=" p-8 rounded-lg shadow-lg w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-5">Register</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/10  placeholder:text-gray-400 p-4 rounded-xl mb-5 outline-none"
        />

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

        <button className="bg-blue-500 text-white w-full py-3 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;