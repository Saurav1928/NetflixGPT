import React from "react"
import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  console.log(movies)
  return (
    <div className="bg-black relative text-white">
      <div className="-mt-36 relative  z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
