import { createSlice } from '@reduxjs/toolkit'


export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    
    loginData:{
        userName:"",
        emailAddress:"",
        password:""

    }
   

  },
  reducers: {
     
      setLoginData: (state, action) => {
        state.loginData = action.payload
      },
      
  },
})

export const { setLoginData } = loginSlice.actions

export default loginSlice.reducer