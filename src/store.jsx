import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slice'

export default configureStore({
  reducer: {
    login: loginSlice,
  },
})