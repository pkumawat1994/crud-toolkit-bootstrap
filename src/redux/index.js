import { createAsyncThunk } from "@reduxjs/toolkit";
import CommonUrl from "../apiServices/CommonUrl";
import { toast } from "react-toastify";

// -----------------------------Register Action--------------
export const RegisterAction=createAsyncThunk("authReducer/RegisterAction",async(data,{rejectWithValue})=>{
    try{
        console.log("coming-data",data)
        const register_response = await CommonUrl.post("/employee", data);
        console.log("resppnseee_Api", register_response);
        if (register_response.status === 200) {
          return register_response;
        }
    }catch(err){
        rejectWithValue(err)
    }

})

// --------------------------Login Action--------------------

export const LoginAction=createAsyncThunk("authReducer/LoginAction",async(inputData,{rejectWithValue})=>{
    
        console.log("coming-data",inputData)
        const register_response = await CommonUrl.get("/employee");
        let userDetail= register_response?.data?.find((ele)=>(ele.email===inputData.email && ele.password===inputData.password))
         
        if(userDetail.email===inputData.email && userDetail.password===inputData.password){
            return  userDetail
        }
        })
        

// --------------------------------------Get User list-------------------


export const GetListAction=createAsyncThunk("userReducer/GetListAction",async(_,{rejectWithValue})=>{
    console.log(12121212,"callAction")
    try{
        const register_response = await CommonUrl.get("/employee");
        console.log("user-List", register_response);
        if (register_response.status === 200) {
          return register_response;
        }
    }catch(err){
        rejectWithValue(err)
    }

})

// -------------------------------Delete user----------------------

export const DeleteAction=createAsyncThunk("userReducer/DeleteAction",async(id,{rejectWithValue})=>{
    console.log(12121212,"callAction")
    try{
        const register_response = await CommonUrl.delete(`/employee/${id}`);
        console.log("user-Delete", register_response);
        if (register_response.status === 200) {
          return register_response.statusText;

        }
    }catch(err){
        rejectWithValue(err)
    }

})

// ----------------------update user---------------------

export const UpdateAction=createAsyncThunk("userReducer/UpdateAction",async(data,{rejectWithValue})=>{
    console.log("update-data",data)
    try{
        const register_response = await CommonUrl.put(`/employee/${data?.id}`,data);
        console.log("user-update", register_response);
        if (register_response.status === 200) {
          return register_response;
        }
    }catch(err){
        // rejectWithValue(err)
        console.log("delete_user",err);
    }

})

