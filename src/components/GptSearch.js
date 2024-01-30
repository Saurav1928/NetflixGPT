import React from "react"
import { useSelector } from "react-redux"
import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { BG_IMG } from "../utils/constants"

const GptSearch = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  console.log(showGptSearch)
  return (
    <div className="relative  bg-slate-400 h-screen  ">
      {/* <div>
        <img className="absolute -z-10" src={BG_IMG} alt="bg-logo" />
      </div> */}
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch
