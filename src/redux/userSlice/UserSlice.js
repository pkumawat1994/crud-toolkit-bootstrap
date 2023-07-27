import { createSlice } from "@reduxjs/toolkit";
import { DeleteAction, GetListAction, UpdateAction } from "..";
import { toast } from "react-toastify";

export  const UserSlice=createSlice({
    name:"userReducer",
    initialState:{
        userList:[],
        loading:false,
      
        
    },
    reducers:{},
    extraReducers:(builder)=>{
        // ---------------------------Get User-List----------
        builder.addCase(GetListAction.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(GetListAction.fulfilled,(state,action)=>{
            console.log("fullfilllleeddd-data-list", action);
            state.userList=action?.payload?.data;
            state.loading=false;
        })
        builder.addCase(GetListAction.rejected,(state)=>{
            state.loading=false;
            toast.error("list fetch Error")
        })



        // ------------delete handle-----------------

        builder.addCase(DeleteAction.pending,(state)=>{
            state.loading=true  
        })
        builder.addCase(DeleteAction.fulfilled,(state,action)=>{
            console.log("deleteeee-data-list", action);
            state.loading=false;
            toast.success("Delete Successfully");
        })
        builder.addCase(DeleteAction.rejected,(state)=>{
            state.loading=false;
            toast.error("Error Delete User")
        })

        // ---------------------update user-----------------

        builder.addCase(UpdateAction.pending,(state)=>{
            state.loading=true 
        })
        builder.addCase(UpdateAction.fulfilled,(state,action)=>{
            toast.success("Update Success")
            state.loading=false;
        })
        builder.addCase(UpdateAction.rejected,(state)=>{
            toast.error("derver invalid")
            state.loading=false;
        })
     
    }
})
export default UserSlice.reducer;