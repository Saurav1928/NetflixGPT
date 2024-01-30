import React from "react"
import MovieCard from "./MovieCard"
const MovieList = ({ title, movies }) => {
  if (!movies) return
  console.log(movies)
  return (
    <div className="px-6 bg-black">
      <h1 className="font-semibold text-2xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
          {/* <MovieCard poster_path={movies[0]?.poster_path} /> */}
        </div>
      </div>
    </div>
  )
}

export default MovieList
