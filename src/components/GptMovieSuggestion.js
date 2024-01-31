import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt)
  const { movieNames, movieRes } = gpt
  if (!movieNames) return <h1>No Movie</h1>

  return (
    <div className="bg-black m-4 p-4">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieRes[index]}
          />
        )
      })}
    </div>
  )
}

export default GptMovieSuggestion
