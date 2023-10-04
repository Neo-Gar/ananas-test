import { configureStore } from '@reduxjs/toolkit'
import addModalReducer from '@/features/AddModal/store/addModalSlice'
import companiesReducer from '@/entities/CompaniesGrid/store/companiesSlice'
export const store = configureStore({
  reducer: {
    addModal: addModalReducer,
    companies: companiesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch