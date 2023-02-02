import React from "react";

function Login() {
  return (
    <>
      <div className="container w-screen text-center">
        <h3 className="font-semibold text-xl m-4">Login</h3>
        <form className="">
          <p className="font-semibold">Email:</p>
          <input
            label="Email"
            type="email"
            name="email"
            required
            className="border border-gray-300 rounded-md w-80 h-8"
          />
          <p className="font-semibold">Password:</p>
          <input
            label="Password"
            type="password"
            name="password"
            className="border border-gray-300 rounded-md w-80 h-8"
          />
          <div className="m-4">
            <button
              type="submit"
              className="bg-darkBlue text-white font-bold w-72 h-12 text-lg rounded-lg"
            >
              Login now
            </button>
            <p className="font-semibold">Need an account? Sign up here.</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
