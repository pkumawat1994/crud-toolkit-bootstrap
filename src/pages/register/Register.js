import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { RegisterAction, UpdateAction } from '../../redux';
import { toast } from 'react-toastify';
import { registerSchema } from '../../utils/AllSchemas';
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation } from 'react-router-dom';


const Register = () => {
  const [editVal,setVal]=useState("")
  const {state} = useLocation();
  const btnRef = useRef();
  // console.log("singgggg",state.obj);
  // const { id, color } = singleUser;
  let dispatch=useDispatch();
 const {loginSuccessMassage,loading }= useSelector((state)=>state?.AuthSlice);
  const {
    register,
    handleSubmit,setValue,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange", // "onBlur"
    resolver: yupResolver(registerSchema) 
  });

  const onSubmit = (data) => {
   
    const inputTest = btnRef?.current?.name;
    console.log(11111111,inputTest);
    if(inputTest
      ==='updt-btn'){
        alert("update action-call")
        let updtObj={
          id:editVal.id,
          name:data.name,
          email:data.email,
          mobile:data.mobile,
          city:data.city,
          password:data.password
        }
        dispatch(UpdateAction(updtObj))
        reset();
      }else{
        dispatch(RegisterAction(data))
        reset();
      }
  };

  useEffect(()=>{
    console.log(121212,loginSuccessMassage);
    if(loginSuccessMassage){
      toast.success(loginSuccessMassage)
    }
  },[loginSuccessMassage])

useEffect(()=>{
  if(state){
    setVal(state.obj)
    setValue("name",state?.obj?.name, { shouldValidate: true });
    setValue("email",state?.obj?.email, { shouldValidate: true });
    setValue("mobile",state.obj.mobile, { shouldValidate: true });
    setValue("city",state?.obj?.city, { shouldValidate: true });
  }
},[state])
  return (<>
    <form onSubmit={handleSubmit(onSubmit)}   >
    <div style={{margin:"auto" ,width:"30%"}} className="form-group">
        <h1>Register Form</h1>
      <input type="text"  {...register("name",{ required: true })}  className="form-control"  placeholder='First name'/>
      {errors.name && <span class="err-note">{errors.name?.message}</span>} 
      <br/>
      <br/>
      {/* {!errors.name <span class="valid-feedback">aproveee</span>}  */}

      {/* <input type="text"  {...register("lastName",{ required: true })}  className="form-control"  placeholder='Last name'/>
      <br/>
      {errors.lastName && <span class="err-note">{errors.lastName?.message}</span>}  */}
      {/* {!errors.name <span class="valid-feedback">aproveee</span>}  */}

      
      <input type="email"  {...register("email",{ required: true })}  className="form-control" placeholder='Enter email' />
      
      {errors.email &&  <span  class="err-note">{errors.email?.message}</span>}
      <br/>
      <br/>
      <input type="text"  {...register("mobile",{ required: true })}  className="form-control" placeholder='Enter Mobile number' />
     {errors.mobile &&  <span class="err-note">{errors.mobile?.message}</span>}
      <br/>
      <br/>
        <select   className="form-control" {...register("city")}>
            <option value="">--Select City--</option>
            <option value="Dewas">Dewas</option>
            <option value="Indore">Indore</option>
        </select>
       <span  class="err-note">{errors.city?.message }</span>
      <br/>
      <br/>
      <input type="password"   {...register("password")}  className="form-control"  placeholder='Enter Password' />
     {errors.password && <span  class="err-note"> {errors.password?.message}</span>} 
     <br/>
     <br/>
      {state? <button type='submit'className='btn btn-danger' name="updt-btn"  ref={btnRef}  >{loading? <ScaleLoader color="#36d7b7" />:"Update User" }</button>:<button type='submit'className='btn btn-danger' >{loading? <ScaleLoader color="#36d7b7" />:"Register" }</button>}  
    </div>
    </form>
    </>
  );
}

export default Register;
