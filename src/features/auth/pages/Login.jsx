import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ userName: "", password: "" });

  // Validation functions for each field
  const validateUserName = (value) => {
    if (!value.trim()) {
      return "Username is required";
    }
    if (value.trim().length < 3) {
      return "Username must be at least 3 characters";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!value.trim()) {
      return "Password is required";
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  // onBlur handler for username field
  const handleUserNameBlur = () => {
    const error = validateUserName(userName);
    setErrors((prev) => ({ ...prev, userName: error }));
  };

  // onBlur handler for password field
  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setErrors((prev) => ({ ...prev, password: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate both fields before submission
    const userNameError = validateUserName(userName);
    const passwordError = validatePassword(password);

    // If there are any errors, show them and return
    if (userNameError || passwordError) {
      setErrors({ userName: userNameError, password: passwordError });
      return;
    }

    // Clear errors if validation passes
    setErrors({ userName: "", password: "" });

    await axios
      .post(
        "http://localhost:3000/api/auth/login",
        {
          username: userName,
        },
        {
          withCredentials: true,
        },
      )
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
              setErrors((prev) => ({ ...prev, userName: "" }));
            }}
            onBlur={handleUserNameBlur}
            type="text"
            name="username"
            autoComplete="username"
            placeholder="Enter your username"
            className={`rounded-lg border bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition ${
              errors.userName ? "border-red-500" : "border-gray-700"
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-500`}
          />
          {errors.userName && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.userName}</p>
          )}

          <input
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className={`rounded-lg border bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition ${
              errors.password ? "border-red-500" : "border-gray-700"
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-500`}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.password}</p>
          )}
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
