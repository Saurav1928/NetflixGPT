import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieRes: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieRes } = action.payload
      state.movieNames = movieNames
      state.movieRes = movieRes
    },
  },
})

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions
export default gptSlice.reducer
