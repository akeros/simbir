import { createSlice } from '@reduxjs/toolkit'

// enum Lang {
//     en = 'Eng',
//     ru = 'Рус',
// }

export interface FormState {
    city: string;
    address: string;
}

const initialState: FormState = {
    city:'Ульяновск',
    address: '',
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormAddress: (state, { payload }) => {
            state.city = payload.city;
            state.address = payload.address;
        }
        // toggleSidebar: (state) => {
        //     state.isOpenSidebar = !state.isOpenSidebar;
        // },
        // toggleLang: (state) => {
        //     state.lang = state.lang === Lang.en ? Lang.ru : Lang.en;
        // }
    },
})

export const { setFormAddress } = formSlice.actions

export default formSlice.reducer
