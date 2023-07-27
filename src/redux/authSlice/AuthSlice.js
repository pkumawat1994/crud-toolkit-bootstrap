import { createSlice } from "@reduxjs/toolkit";
import { LoginAction, RegisterAction } from "..";
import { toast } from "react-toastify";

export  const AuthSlice=createSlice({
    name:"authReducer",
    initialState:{
        token:"",
        loading:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        // ---------------------------REGISTER------
        builder.addCase(RegisterAction.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(RegisterAction.fulfilled,(state,action)=>{
            console.log("fullfilllleeddd", action);
            toast.success("Registered Successfully");
            state.loading=false;
        })
        builder.addCase(RegisterAction.rejected,(state)=>{
            toast.error("Registered invalid")
            state.loading=false;
        })
// ------------------------------------Login-----------
        builder.addCase(LoginAction.pending,(state)=>{
            state.loading=true
            state.token=""
        })

        builder.addCase(LoginAction.fulfilled,(state,action)=>{
            console.log("fullfilllleeddd", action);
            localStorage.setItem("userToken",JSON.stringify(action.payload))
            state.token=action.payload;
            toast.success("Login Successful !")
            state.loading=false;
        })
        builder.addCase(LoginAction.rejected,(state,action)=>{
            toast.error("Email And Password is Invalid !!! ")
            state.loading=false;
            state.token=""
        })
    }
})
export default AuthSlice.reducer;