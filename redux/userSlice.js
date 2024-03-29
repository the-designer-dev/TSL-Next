import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'userToken',
  initialState: { token: '',
  user:{},
  allusers:[],
  isAdmin:false
   },
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload
    },
    setUser: (state,action) => {
      state.user = action.payload
    },
    setallusers: (state,action) => {
      state.allusers = action.payload
    },
    setisAdmin: (state,action) => {
      state.isAdmin = action.payload
    },
  }
  
})

// Action creators
export const { setToken,setUser , setallusers , setisAdmin} = userSlice.actions;

export default userSlice.reducer;

