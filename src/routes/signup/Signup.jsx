import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../src/firebase-config.js"


function Signup() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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
                Sign up
              </h1>
              <form className="space-y-4 md:space-y-6" >
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900">Your email</label>
                  <input type="email" name="email" id="email" onChange={(e) => setRegisterEmail(e.target.value)} className=" border border-lightGray text-gray-900 sm:text-sm rounded-lg focus:ring-darkRed focus:border-darkRed block w-full p-2.5  placeholder-gray-400 " placeholder="youremail@domain.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900">Password</label>
                  <input type="password" name="password" id="password" onChange={(e) => setRegisterPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-lightGray text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  dark:border-lightGray placeholder-gray-400 focus:ring-darkRed focus:border-darkRed" required="" />
                </div>
                {/* <div>
                  <label for="confirm-password" className="block mb-2 text-sm font-semibold text-gray-900">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-lightGray text-gray-900 sm:text-sm rounded-lg focus:border-darkRed block w-full p-2.5 bg-gray-700  placeholder-gray-400 focus:ring-darkRed" required="" />
                </div> */}

                <button type="button" onClick={register} className="w-full text-white bg-darkRed focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center hover:bg-orangeRed ">Sign up</button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account? <a href="/login" className="font-semibold text-darkRed hover:underline">Login here</a>
                </p>
              </form>
              {/* <h1>Hello</h1>
              {user?.email}
              <button type="button" onClick={logout} className="w-full text-white bg-darkRed focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center hover:bg-orangeRed ">Sign out</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup