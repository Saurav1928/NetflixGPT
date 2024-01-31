import React, { useRef } from "react"
import { lang } from "../utils/languageConstant"
import { useDispatch, useSelector } from "react-redux"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constants"
import { addGptMovies } from "../utils/gptSlice"

const GptSearchBar = () => {
  const selectedanguage = useSelector((store) => store.config.lang)
  const searchText = useRef()
  const dispatch = useDispatch()
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
    const json = await data.json()
    return json.results
  }
  const handleGptSearchClick = async () => {
    // console.log(searchText)
    const gptQuery =
      "Act as m ovie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separted as given in ahead example Result. ex. Hera Pheri, Golmal, De dana dan, Bhag milkha bhag, Uri"
    const gptRes = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    })
    // console.log(gptRes.choices)
    const gptMovies = gptRes.choices?.[0]?.message?.content.split(",")
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie))
    const tmdbRes = await Promise.all(promiseArray)
    dispatch(addGptMovies({ movieNames: gptMovies, movieRes: tmdbRes }))
    // console.log(tmdbRes)
  }

  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className=" w-1/2 grid grid-cols-12 bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          required
          ref={searchText}
          className="p-4 m-4 col-span-9 "
          placeholder={lang[selectedanguage].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-600 rounded-md text-white"
          onClick={handleGptSearchClick}
        >
          {lang[selectedanguage].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
