import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error : null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state)=>{
            state.loading = true;
            state.error=null; //! we may get an error first so to clear it we use and make it null
        },
        signInSuccess : (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error=null;
        },
        signInFailure: (state,action)=>{
            state.loading=false,
            state.error=action.payload
        },
        signoutSuccess: (state) => {
            state.currentUser = null;
            state.error = null;
            state.loading = false;
          },
    }
})

export const {signInStart,signInSuccess,signInFailure,signoutSuccess} = userSlice.actions;
export default userSlice.reducer; //! Exports the default userreducer in our redux store.js reducer