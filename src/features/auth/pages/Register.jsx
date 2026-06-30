import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/auth/register", {
        username: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Register
        </h1>

        <form className="flex flex-col gap-5">
          <input
            onInput={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Enter your full name"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            autoComplete="email"
            placeholder="Enter your email"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="password"
            placeholder="Create a password"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="confirmPassword"
            autoComplete="confirmPassword"
            placeholder="Confirm your password"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?
          <Link to="/login">
            <span className="ml-1 cursor-pointer text-blue-400 hover:text-blue-300">
              Login
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
