import { createSlice } from '@reduxjs/toolkit'
export const addTourSlice = createSlice({
  name: 'addTour',
  initialState: {
    title : '',
    city : '',
    meet_point : '',
    tourCoordinates : {},
    languages : [{}],
    min_group_size : 0,
    max_group_size : 0,
    min_age : 0,
    parents_bring_kids : false,
    vehicles : [{}],
    tickets : [{}],
    experiences : [],
    adult_rates : 0,
    child_rates : 0,
    infant_rates : 0,
    min_private_group:0,
    booked_as_private:false,
    has_date_range:false,
    available_daterange_start:'',
    available_daterange_end:'',
    days_available:[],
    tour_duration:0,
    seperate_mode_transport:false,
    choose_their_tickets:false
  },
  reducers: {

    setTitle:(state , action) =>{
        state.title = action.payload
    },
    setCity:(state , action) =>{
        state.city = action.payload
    },
    setMeet_point:(state , action) =>{
        state.meet_point = action.payload
    },
    setTourCoordinates:(state , action) =>{
        state.tourCoordinates = action.payload
    },
    setLanguages:(state , action) =>{
        state.languages = action.payload
    },
    setMin_group_size:(state , action) =>{
        state.min_group_size = action.payload
    },
    setMax_group_size:(state , action) =>{
        state.max_group_size = action.payload
    },
    setMin_age:(state , action) =>{
        state.min_age = action.payload
    },
    setParents_bring_kids:(state , action) =>{
        state.parents_bring_kids = action.payload
    },
    setVehicles:(state , action) =>{
        state.vehicles = action.payload
    },
    setTickets:(state , action) =>{
        state.tickets = action.payload
    },
    setExperiences:(state , action) =>{
        state.experiences = action.payload
    },
    setAdult_rates:(state , action) =>{
        state.adult_rates = action.payload
    },
    setChild_rates:(state , action) =>{
        state.child_rates = action.payload
    },
    setInfant_rates:(state , action) =>{
        state.infant_rates = action.payload
    },
    setMin_private_group:(state , action) =>{
        state.min_private_group = action.payload
    },
    setBooked_as_private:(state , action) =>{
        state.booked_as_private = action.payload
    },
    setHas_date_range:(state , action) =>{
        state.has_date_range = action.payload
    },
    setAvailable_daterange_start:(state , action) =>{
        state.available_daterange_start = action.payload
    },
    setAvailable_daterange_end:(state , action) =>{
        state.available_daterange_end = action.payload
    },
    setDays_available:(state , action) =>{
        state.days_available = action.payload
    },
    setTour_duration:(state , action) =>{
        state.tour_duration = action.payload
    },
    setSeperate_mode_transport:(state , action) =>{
        state.seperate_mode_transport = action.payload
    },
    setChoose_their_tickets:(state , action) =>{
        state.choose_their_tickets = action.payload
    },
   }
})

// Action creators
export const { setTitle,setCity,setMeet_point,setTourCoordinates,setLanguages,setMin_group_size,setMax_group_size,setMin_age,setParents_bring_kids,setVehicles,setTickets,setExperiences,setAdult_rates,setChild_rates,setInfant_rates, setMin_private_group ,setBooked_as_private , setHas_date_range , setAvailable_daterange_start,setAvailable_daterange_end,setDays_available ,setTour_duration , setSeperate_mode_transport,setChoose_their_tickets} = addTourSlice.actions;

export default addTourSlice.reducer;

