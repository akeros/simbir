import { createSlice } from '@reduxjs/toolkit'

enum Lang {
  en = 'Eng',
  ru = 'Рус',
}

export interface AppState {
  isOpenSidebar: boolean;
  lang: Lang;
}

const initialState: AppState = {
  isOpenSidebar: false,
  lang: Lang.ru,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    toggleLang: (state) => {
      state.lang = state.lang === Lang.en ? Lang.ru : Lang.en;
    }
  },
})

export const { toggleSidebar, toggleLang } = appSlice.actions

export default appSlice.reducer
