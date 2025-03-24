import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signUpAndInSlice, { SignUpAndSignInState } from "./signUpAndInSlice";
import logger from 'redux-logger';
export interface RootState {
    signUpAndIn: SignUpAndSignInState
}
const rootReducer = combineReducers({
    signUpAndIn: signUpAndInSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(logger)
})