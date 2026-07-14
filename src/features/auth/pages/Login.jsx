import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/api/auth/login", {
        username: userName,
        password: password,
      },{
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Login
        </h1>

        <form className="flex flex-col gap-5">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            name="username"
            autoComplete="username"
            placeholder="Enter your username"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?
          <Link to="/register">
            <span className="ml-1 cursor-pointer text-blue-400 hover:text-blue-300">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
