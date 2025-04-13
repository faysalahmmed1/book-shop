
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
          Login 
        </h2>
       

        <form className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-green-500 py-2"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-green-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-green-600 hover:underline">
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-2">
  <p>
    Don't have an account?{" "}
    <NavLink to="/register">
      <span className="text-red-500 underline hover:text-red-600 transition duration-200">
        Register
      </span>
    </NavLink>
  </p>
</div>


        <div className="mt-6 text-center text-sm text-gray-500">or sign in with</div>

        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="bg-blue-600 text-white p-3 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-sky-400 text-white p-3 rounded-full">
            <FaTwitter />
          </a>
          <a href="#" className="bg-red-500 text-white p-3 rounded-full">
            <FaGoogle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
