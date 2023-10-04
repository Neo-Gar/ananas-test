import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/app/store";

interface addModalState {
    isActive: boolean
}

const initialState:addModalState = {
    isActive: false
}

const addModalSlice = createSlice({
    name: 'addModal',
    initialState,
    reducers: {
        toggleActive: state => {
            state.isActive = !state.isActive
        }
    }
})

export const {toggleActive} = addModalSlice.actions
export const selectIsActive = (state: RootState) => state.addModal.isActive
export default addModalSlice.reducer