import { createSlice } from "@reduxjs/toolkit"

export interface SignUpAndSignInState{
    AUTH_TOKEN:string
}
const initialState:SignUpAndSignInState = {
    AUTH_TOKEN: ""
}

export const signUpAndInSlice = createSlice({
    name: "signUpAndIn",
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.AUTH_TOKEN = action.payload
        }
    }
})

export const {
    setAuthToken
} = signUpAndInSlice.actions;

export default signUpAndInSlice.reducer;