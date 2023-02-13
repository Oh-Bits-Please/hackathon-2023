import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../src/firebase-config.js"


function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (err) {
      console.error(err.message)
    }
  };

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <>
      <section className="bg-lightGray">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border border-lightGray md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-darkRed md:text-2xl">
                Welcome back
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-lightGray text-gray-900 sm:text-sm rounded-lg focus:ring-darkRed  block w-full p-2.5 placeholder-gray-400 focus:border-darkRed"
                    onChange={(e) => setLoginEmail(e.target.value)} placeholder="youremail@domain.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900">Password</label>
                  <input type="password" name="password" id="password"
                    onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-lightGray text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 focus:ring-darkRed focus:border-darkRed" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-lightGray rounded bg-gray-50 focus:ring-3  dark:bg-gray-700 focus:ring-darkRed ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-semibold text-darkRed hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="button" onClick={login} className="w-full text-white bg-darkRed hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-darkRed dark:hover:bg-orangeRed focus:ring-orangeRed">Login</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Need an account? <a href="/signup" className="font-semibold text-darkRed hover:underline dark:text-primary-500">Sign up here!</a>
                </p>
              </form>
              <h1>Test</h1>
              {user?.email}
              <button type="button" onClick={logout} className="w-full text-white bg-darkRed focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center hover:bg-orangeRed ">Logout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
