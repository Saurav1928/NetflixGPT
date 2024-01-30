import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const useTopRatedMovies = () => {
  const dispatch = useDispatch()
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    )
    const json = await data.json()
    // console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(() => {
    getTopRated()
  }, [])
}

export default useTopRatedMovies
