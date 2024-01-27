import React, { useRef, useState } from "react"
import { checkValidation } from "../utils/validate"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import Header from "./Header"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false)
  const [errMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const dispatch = useDispatch()
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const validateForm = () => {
    const message = checkValidation(email.current.value, password.current.value)
    setErrorMessage(message)
    console.log(email.current.value)
    console.log(password.current.value)
    // console.log(password)
    if (message) return

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/113550158?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL,
                })
              )

              console.log(user)
              navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message)
            })

          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const errFound = errorCode + " " + errorMessage
          console.log(errFound)
          setErrorMessage(errFound)
          // ..
        })
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const errFound = errorMessage
          console.log(errFound)
          setErrorMessage("Invalid Credentals")
        })
    }
  }
  return (
    <div className="relative">
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="bg-logo"
      />
      <div className=" absolute w-[100%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 bg-black p-12 mx-auto my-28  left-0 right-0 rounded-lg opacity-90 text-white"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <div className="flex flex-col gap-4 my-4 ">
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Full Name.."
                  className="w-full p-2 bg-gray-600 "
                />
              )}
              <input
                type="text"
                ref={email}
                placeholder="Mail.."
                className="w-full p-2 bg-gray-700 opacity-100"
              />
              <input
                type="password"
                ref={password}
                placeholder="Password.."
                className="w-full p-2 bg-gray-700 opacity-100"
              />
            </div>
            <p className="text-red-300">{errMessage}</p>
            <button
              className="bg-red-700 px-4 w-full py-2 rounded-lg"
              onClick={validateForm}
            >
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
    </div>
  )
}

export default Login
