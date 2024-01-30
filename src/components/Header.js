import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { NETFLIX_LOGO } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice"
import { SUPPORTED_LANG, lang } from "../utils/languageConstant"
import { changeLang } from "../utils/configSlice"

const Header = () => {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    })

    // unsubscribing / unmounting
    return () => unsubscribe()
  }, [])
  const handleGptToggle = () => {
    // const dispatch = useDispatch()
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    console.log(e.target.value)
    dispatch(changeLang(e.target.value))
    // dispatch(changeLang(e.target.value))
  }
  const user = useSelector((store) => store.user)
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black ">
      <img className="w-44" src={NETFLIX_LOGO} alt="Netflix Logo"></img>
      {user && (
        <div className="flex items-center justify-center">
          <div>
            {showGptSearch && (
              <select className="p-2" onChange={handleLanguageChange}>
                {SUPPORTED_LANG.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="font-semibold bg-green-300 py-1 px-3 rounded-md mx-2"
              onClick={handleGptToggle}
            >
              {!showGptSearch ? " GPT Search" : "Homepage"}
            </button>
          </div>
          <div className="flex flex-col items-center p-2">
            <img
              className="w-12 h-12"
              src={user?.photoURL}
              alt="userIcon"
            ></img>
            <button className="text-white font-bold" onClick={handleSignout}>
              SignOut
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
