import { combineReducers } from "@reduxjs/toolkit";
import  AuthSlice  from "./authSlice/AuthSlice";
import UserSlice from "./userSlice/UserSlice";


const rootReducer=combineReducers({
    AuthSlice:AuthSlice,
    UserSlice:UserSlice
});

export default rootReducer