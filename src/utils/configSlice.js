import { createSlice } from "@reduxjs/toolkit"

const configSlice = createSlice({
  name: "config",
  initialState: { lang: "eng" },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload
    },
  },
})
export const { changeLang } = configSlice.actions
export default configSlice.reducer
