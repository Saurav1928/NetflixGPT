import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // console.log(action)
      state.nowPlayingMovies = action.payload
    },
  },
})

export const { addNowPlayingMovies } = movieSlice.actions
export default movieSlice.reducer
