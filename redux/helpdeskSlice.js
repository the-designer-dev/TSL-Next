import { createSlice } from '@reduxjs/toolkit'
export const helpdeskSlice = createSlice({
  name: 'helpdesk',
  initialState: { 
  tickets: [],
   },
  reducers: {
    setTickets: (state,action) => {
      state.tickets = action.payload
    },
    updateTickets: (state,action) => {
    state.tickets.splice(action.payload[0], 1, action.payload[1])
    },
    addTicket: (state,action) => {
    state.tickets.push(action.payload)
    }
  }
  
})

// Action creators
export const { setTickets , updateTickets , addTicket} = helpdeskSlice.actions;

export default helpdeskSlice.reducer;

