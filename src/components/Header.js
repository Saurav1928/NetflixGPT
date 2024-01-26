import React, { useState } from "react"

const Header = () => {
  const [isSignInForm, setIsSignInForm] = useState(false)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className=" relative w-[100%]">
      <div className=" bg-gradient-to-b from-black w-[15%] fixed">
        <img
          className="bg-gradient-to-b from-black z-10 p-4 "
          src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        ></img>
      </div>
      <form className="absolute w-3/12 bg-black p-12 mx-auto my-52  left-0 right-0 rounded-lg opacity-95 text-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col gap-4 my-4 ">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name.."
                className="w-full p-2 bg-gray-700 opacity-100"
              />
            )}
            <input
              type="text"
              placeholder="Mail.."
              className="w-full p-2 bg-gray-700 opacity-100"
            />
            <input
              type="password"
              placeholder="Password.."
              className="w-full p-2 bg-gray-700 opacity-100"
            />
          </div>
          <button className="bg-red-700 px-4 w-full py-2 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="mt-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Rgistered, Sign In Now"}
          </p>
        </div>
      </form>
    </div>
  )
}

export default Header
