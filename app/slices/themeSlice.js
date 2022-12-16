import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme:(state)=>{

        state.theme = !state.theme

    }
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer